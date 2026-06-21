**Abstract.**

Webstudio is apparently notorious to self-host, due to the level of monkeypatching, and so I have decided to write up a guide on doing so, assuming a fresh Windows 11 install. The official guide will not work, and so we advise you to follow the instructions below without the use of VS Code.

Guide as of 15.06.2026. 

**Installation.**

1. Ensure Windows dependencies exist.
	1. Install GitBash (https://git-scm.com/).
	2. Install Node.js v22.22.3 (LTS), .msi. A later version of Node cannot be installed (https://nodejs.org/en/download).
	3. Install Docker Desktop from https://docs.docker.com/desktop/setup/install/windows-install/
		1. Ensure WSL 2 integration is enabled during startup prompts.
	4. Ensure PNPM is installed as a package manager. `Win + R` > `cmd.exe` > `npm install -g pnpm`. Ensure cmd has Administrator privileges, like all CLIs in this guide.
2. Install Webstudio self-hosting instance. This guide assumes you got it via the Sourceforge mirror: https://sourceforge.net/projects/webstudio.mirror/ (as of 15.06.2026; different versions may have different install instructions). Extract the ZIP upon download.
3. `Win` > `Notepad` > `Click on Notepad` > `Run as Administrator`.
4. Open target directory file: `C:/Windows/System32/drivers/etc/hosts`
5. Append this host rule to the bottom of the document: `127.0.0.1 wstd.dev`.
6. Ctrl + S and close Notepad.
7. Open Git Bash and navigate to the extracted directory. Run the following commands:
	1. `pnpm config set script-shell bash`
	2. `nano apps/builder/.env.development`
	3. Paste the following configuration (<ins>File 1</ins>)
	4. `mkdir -p packages/prisma-client`
	5. `cp apps/builder/.env.development packages/prisma-client/.env`
8. Vite Configuration needs to be patched to avoid React duplication in hooks. 
   
   Open Notepad > Open `apps/builder/vite.config.ts`, and replace _only_ the code scope under `export default defineConfig`, replacing it with <ins>File 2</ins>. Do not replace ethe entire file, just the code block specified.
1. Run Docker Desktop.
2. Go back to Git Bash, and run the following commands:
	1. `pnpm install --no-engine-strict`
	2. `pnpm --filter @webstudio-is/builder... build`
	3. `docker compose -f .devcontainer/docker-compose.yml up -d db`
	4. `find packages/prisma-client/prisma/migrations -type f -name "migration.sql" | sort | xargs cat | docker exec -i devcontainer-db-1 psql -U postgres -d webstudio`
	5. `cd packages/prisma-client`
	6. `pnpm install pg`
	7. `pnpm exec prisma generate`
	8. `cd ../..`
	9. Copy and paste <ins>File 3</ins> into the terminal. Press Enter.
	10. `docker compose -f .devcontainer/docker-compose.yml up -d rest`
	11. `rm -rf apps/builder/node_modules/.vite`
3. (Right Click > New > Text Document > Rename File to `autorun.bat` > Right Click `autorun.bat` > Edit In Notepad), and copy and paste <ins>File 4</ins>. 
4. Run `autorun.bat`.
5. Open your browser, and navigate to https://wstd.dev:5173/login.
6. Input the configuration details:
7. Auth Secret: `0000`. Select Plan: `Pro`.

If anything went wrong during this process, prompt `Gemini 3.5 Flash` for help with error stack traces generated in the Git Bash terminal at [Google AI Studio](https://aistudio.google.com/prompts/new_chat), or grok it if you are a Linux user:

_'I [caveman](https://github.com/juliusbrussee/caveman). Rock good. Grok good. SuperGrok very good. No deal with XXX[^1].'_

**File 1.** (`.env.development`):

```
DATABASE_URL="postgresql://postgres:pass@localhost:5432/webstudio?schema=public"
DIRECT_URL="postgresql://postgres:pass@localhost:5432/webstudio?schema=public"

DEV_LOGIN=true
AUTH_SECRET=0000
SESSION_SECRET=0000
PRISMA_BINARY_TARGET=["native"]

POSTGREST_URL=http://127.0.0.1:3000
POSTGREST_API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttZHBpeHpvcWlpcmJtcGRpcHB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMzY0MjgsImV4cCI6MTk4MTkxMjQyOH0.jjeYvTDrWP9pV7dfZr6fptualNQ3aR13kuPhvT25Sso"

FEATURE_FLAGS=*
PLANS='[
  {
    "name": "Pro",
    "features": {
      "canDownloadAssets": true,
      "canRestoreBackups": true,
      "allowAdditionalPermissions": true,
      "allowDynamicData": true,
      "allowAuth": true,
      "allowContentMode": true,
      "allowStagingPublish": true,
      "maxContactEmailsPerProject": 5,
      "maxDomainsAllowedPerUser": 200,
      "maxDailyPublishesPerUser": 100,
      "maxProjectsAllowedPerUser": 300,
      "maxAssetsPerProject": 350
    }
  },
  {
    "name": "Team",
    "extends": "Pro",
    "features": {
      "maxWorkspaces": 20,
      "seatsIncluded": 4,
      "maxSeatsPerWorkspace": 20
    }
  }  
]'
```

**File 2.** (`apps/builder/vite.config.ts`):

```ts
export default defineConfig(({ mode }) => {
  if (mode === "development") {
    // Enable self-signed certificates for development service 2 service fetch calls.
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  }

  let env_vars = loadEnv(mode, __dirname, "");
  let multiplayer_relay_proxy_target =
    process.env.COLLAB_RELAY_PROXY_TARGET ??
    env_vars.COLLAB_RELAY_PROXY_TARGET ??
    "http://127.0.0.1:1999";

  let root_dir = ["..", "../..", "../../.."]
    .map((dir) => path.join(__dirname, dir))
    .find((dir) => existsSync(path.join(dir, ".git")));

  let has_private_folders =
    fg.sync([path.join(root_dir ?? "", "packages/*/private-src/*")], {
      ignore: ["**/node_modules/**"],
    }).length > 0;

  let target_conditions = has_private_folders
    ? ["webstudio-private", "webstudio"]
    : ["webstudio"];

  return {
    plugins: [
      remix({
        presets: [vercelPreset()],
        future: {
          v3_lazyRouteDiscovery: false,
          v3_relativeSplatPath: false,
          v3_singleFetch: false,
          v3_fetcherPersist: false,
          v3_throwAbortReason: false,
        },
      }),
      {
        name: "request-timing-logger",
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url === undefined) {
              let parsed_path = req.headers[":path"];
              if (typeof parsed_path === "string") {
                req.url = parsed_path;
              }
            }
            for (let header_key of Object.keys(req.headers)) {
              if (header_key.startsWith(":")) {
                delete req.headers[header_key];
              }
            }
            if (req.url?.includes("/node_modules/.vite/deps/")) {
              res.setHeader("Cache-Control", "no-store");
            }
            let start_time = Date.now();
            res.on("finish", () => {
              let elapsed_duration = Date.now() - start_time;
              if (
                !(
                  req.url?.startsWith("/@") ||
                  req.url?.startsWith("/app") ||
                  req.url?.includes("/node_modules")
                )
              ) {
                console.info(
                  `[${req.method}] ${req.url} - ${elapsed_duration}ms : ${pc.dim(req.headers.host)}`
                );
              }
            });
            next();
          });
        },
      },
    ],
    resolve: {
      dedupe: ["react", "react-dom"],
      conditions: [...target_conditions, "browser", "development|production"],
      alias: [
        {
          find: "~",
          replacement: resolve("app"),
        },
        {
          find: "@supabase/node-fetch",
          replacement: resolve("./app/shared/empty.ts"),
        },
      ],
    },
    ssr: {
      resolve: {
        conditions: [...target_conditions, "node", "development|production"],
      },
    },
    define: {
      "process.env.NODE_ENV": JSON.stringify(mode),
    },
    server: {
      host: "wstd.dev",
      proxy: {
        "/collab-relay": {
          target: multiplayer_relay_proxy_target,
          ws: true,
        },
      },
      https: {
        key: readFileSync("../../https/privkey.pem"),
        cert: readFileSync("../../https/fullchain.pem"),
      },
      cors: ((
        req: IncomingMessage,
        callback: (error: Error | null, options: CorsOptions | null) => void
      ) => {
        if (req.method === "OPTIONS" || req.method === "POST") {
          if (req.headers.origin != null && req.url != null) {
            let request_url = new URL(req.url, `https://${req.headers.host}`);
            if (request_url.pathname === "/builder-logout" && isBuilderUrl(request_url.href)) {
              return callback(null, {
                origin: getAuthorizationServerOrigin(request_url.href),
                preflightContinue: false,
                credentials: true,
              });
            }
          }
          if (req.method === "OPTIONS") {
            return callback(null, {
              preflightContinue: false,
              optionsSuccessStatus: 405,
            });
          }
        }
        return callback(null, {
          origin: false,
        });
      }) as never,
    },
    envPrefix: ["GITHUB_", "PUBLIC_"],
  };
});
```

**File 3.** (Git Bash, Terminal):

```bash
docker exec -it devcontainer-db-1 psql -U postgres -d webstudio -c "
  -- Enforce database-side UUID execution for blank IDs
  ALTER TABLE \"Workspace\" ALTER COLUMN id SET DEFAULT gen_random_uuid();
  ALTER TABLE \"Project\" ALTER COLUMN id SET DEFAULT gen_random_uuid();
  ALTER TABLE \"Domain\" ALTER COLUMN id SET DEFAULT gen_random_uuid();
  ALTER TABLE \"Notification\" ALTER COLUMN id SET DEFAULT gen_random_uuid();
  ALTER TABLE \"AuthorizationToken\" ALTER COLUMN token SET DEFAULT gen_random_uuid();

  -- Authorize schema permissions for localhost API calls
  GRANT USAGE, CREATE ON SCHEMA public TO anon, authenticated, service_role, public;
  GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO anon, authenticated, service_role, public;
  GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated, service_role, public;
  ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO anon, authenticated, service_role;

  -- Comment-configure composite join mappings for PostgREST View structures
  COMMENT ON VIEW \"DashboardProject\" IS '{\"relationships\": [{\"cardinality\": \"many-to-one\", \"associated_relation\": \"Asset\", \"foreign_key\": [\"previewImageAssetId\", \"id\"]}]}';
"
```

**File 4.** (`autorun.bat`):

```bat
@echo off
title Webstudio Self-Host Workspace Launcher
color 0b

:: Resolve current directory path and convert backslashes to forward slashes
set current_dir=%~dp0
set current_dir=%current_dir:\=/%

:: Detect Git Bash executable path
set git_bash=%ProgramFiles%\Git\bin\bash.exe
if not exist "%git_bash%" set git_bash=%ProgramFiles(x86)%\Git\bin\bash.exe
if not exist "%git_bash%" (
    :: Fallback to system path resolution if not in default directories
    set git_bash=bash.exe
)

echo ============================================================
echo Launching Webstudio Platform inside Git Bash...
echo ============================================================
echo.

:: Fires the entire execution pipeline inside a native Git Bash instance
"%git_bash%" --login -i -c "cd '%current_dir%' && export DEBUG='' && echo '==================================================' && echo '1. Starting Webstudio Docker Backends...' && echo '==================================================' && docker compose -f .devcontainer/docker-compose.yml up -d db rest && echo '' && echo 'Docker services running. Sleeping 5 seconds...' && sleep 5 && echo '' && echo '==================================================' && echo '2. Booting Builder local dev server...' && echo '==================================================' && pnpm --filter '@webstudio-is/builder' dev"

pause
```

**Unnecessary Explanations.**

[^1]: X/xAI/SpaceX = XXX (How obscene!). I do not suggest Melon Musk's models are any good at troubleshooting. However, I hear adding more CLI errors to your Linux terminal is like catnip. Hear, hear!