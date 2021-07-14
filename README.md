
# Ephe Wars

## Quick Start

Run the following command from the root of the workspace: `ng serve`

## Structure & Design

This is project is implemented as a monorepo to take advantage of
the following benefits: more code reuse, easier dependency management, high quality tooling,
holistic dev experience, among others.

There are four types of libraries which have their own rules.

- Feature - Can import from any other type of lib except unshared feature libs (e.g. planet).
- Data - Can only import from utility libs (e.g. planet-data).
- UI - Can import from either data or other ui libs (e.g. ui-components).
- Utility - Can import from either data or other utility libs (e.g. utilities).

## Improvements

- UI: theming, icons, images, paging-controls, improved experience by device
- Performance: caching 
- Documentation
- Testing: Storybook and unit and e2e testing
- Functionality: add more data points for planets and people, support more entities (e.g. vehicles, spaceships, etc.).
- Other: error handling

## Challenges

I think the biggest challenge was to get the project completed in the time stated of 2 - 3 hours. State managment always
takes a bit of time to pencil out especially when third party libraries aren't involved.




