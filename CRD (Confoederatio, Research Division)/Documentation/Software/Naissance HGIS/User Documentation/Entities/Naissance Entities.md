> [!WARNING]
> Documentation of this nature on Confoederatio Docs are user-facing only. Technical documentation should be assigned their own subdomain in the future.

[[Naissance HGIS]] entities are generally split into both [[Naissance Features]] and [[Naissance Geometries]], and are a user-facing term for any object in a Naissance project. It is not implemented as a class, and does not exist in backend terms.

Shared functionality between entities are implemented at the Feature and Geometry level rather than having a shared base class, which would lead to an inheritance-based rather than composite tree. 