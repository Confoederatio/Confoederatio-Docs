```diff
+ A Postmortem on Confoederatio 1.0

Vis Tacitus
- 6 December 2025
```

#blogs #postmortem #Y2025

**And what went wrong?** A lack of foresight. A lack of polish. Most certainly a tendency to rush things. <u>Confoederatio 1.0</u> was a sprawling effort mired in an identity crisis since it had been torn between research on one hand, which became increasingly prominent in its latter days, and game development on the other, whose importance rapidly waned until it was no longer critical to our servers and communities.

Juggling between historical datasets, game development, and artistic pursuits without taking that sweet, sweet time on foundational infrastructure or tooling turned out to be an impossible endeavour, even before factoring in our reduced headcount.

Even so, I do not think that the **Lone Ranger** path which we had decided to go down (in which we do not reach out to prospective members, but rather let them naturally apply, resulting in basically zero people coming forth) was a mistake. There simply are not that many people in the world willing to put their time on the line to aid a poor indie data science studio.

If this post appears incoherent in any way, rest assured that I have just come back from exams and so in keeping with the theme of Confoederatio 1.0's planning, my cognition is not exactly at the height of its abilities.
## What now?

Infrastructure. Specifically, what needs to be done is to work on **[[Vercengen]]** until it is stable and released, eliminating frontend work across all [[Electron]] and web-bound contexts entirely. Next, **[[Naissance HGIS]]** must take the shape of an Integrated Research Environment (IRE) in which office suite data, visualisation, and simulation are bound to spatiotemporally-aware environments.

These developments, alongside the digitisation of the Preservés, would ideally allow for rapid iterations in dataset quality, rounding out [[Eoscala]], [[Sehistoir]], [[Stadestér]], and [[Velkscala]], in addition to seving as a potential rallying point for future prospective communities, though I believe its superapp prospect to still be so niche that few people would be willing to take up that offer.

Only when that is done can we move onto live data analysis and livemap programming. Data portals would have to be opened up for both historical and contemporary databases once they become reliable, alongside an overhaul in our web infrastructure. At this point, **Confoederatio 2.0** would become reality. Whether or not that comes with a corresponding increase in reputation is doubtful, but it is the capabilities that we can leverage that truly matter.

In any case, when we are (comparatively) old and grey, we will have such accomplishments to look back on.
## The Closing Month

But before we can think about such prospects, there are still the remaining 25 days of the year. I plan to spend the first week of that working on migrating Confoederatio Docs over to its new home on Obsidian Publish, polishing Vercengen yet further, and making sure that Naissance HGIS is ready for production use and modularised.

The time-tested plan will be to introduce spates of features to Naissance HGIS first now that its architecture is mature, then begin squashing bugs whilst making sure to keep it as modular as possible. Only then can we proceed with the construction of **Atlas** as a dataset. 

For the reaminder of the month between the 12th and the 31st, I plan to take the holidays off (relatively speaking) to go and work on [[Balance of Power]], our prospective MC server.