(7 December 2025). Subject to change.

- Global settings need to register font options.
- If `.label_coordinates` are set, this means that labels should be detached and the manual label editor used instead of autopopulation. Because of this, `.label_coordinates` should be deprecated and a `.custom_labels` Object used instead.

`naissance.LabelEditor` class:
- Bezier curve/spline arcs (fit label to line segment)
- Label rotation
- Manual drag repositioning of labels
- Per label geometry symbol editor