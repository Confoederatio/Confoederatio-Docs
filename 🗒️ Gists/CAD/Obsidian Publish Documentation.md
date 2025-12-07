As newer versions of **Confoederatio Docs** use [Obsidian Publish](https://obsidian.md/publish) for maintainability, this segment is generally reserved for backend and frontend tips and tricks that may come in handy when attempting to support documentation long-term and avoid refactors.

### Confoederatio Docs Style Guide:

**Banners**
> Banners are mainly used in cover pages to present documentation/databases that might be of importance. When databases are presented instead of documentation, a row break is placed in between as a separator.
- 3. Banner Font: 80pt Karla White
- 2. Tint: 255 to 0 Alpha (left to right)

**Social Media Banners**
- Text: Cascadia Mono 32pt Bold/ExtraLight
### HTML Compatibility:

- Most HTML elements seem compatible, including `<img>` and `<table>`. It may also be limited to tags that are compatible with GitHub HTML rendering. Since `<table>` is generally easier to use than Markdown table formatting, it is recommended for production use.

### Embed Previews:

![[embed_template.png]]
<div align = "center">The embed preview that should show up but doesn't.</div>

Embeds can be changed with the use of YAML configurations [Obsidian Publish Documentation](https://help.obsidian.md/publish/social-share). This has not yet been done for Confoederatio Docs, but should be configured.

Social media banners do not appear to work, only descriptions.
