# MicrofrontendPOC
This is a code base for a react based micro-frontend application using build time integration

#Initial set up
1. Clone the repository.
2. Install dependecnies for all 3 Microfrontends.
3. Start all the Microfrontends.

#Overview
This is a Microfrontend project that is built on the build-time integration strategy. It contains 2 Microfrontends and 1 container.
The 2 Microfrontends are consumed by the container and rendered. The container is the final product that the end user will see.
The Microfrontends are also two separate entities on their own and can be udpated and depolyed without any interdependecy between them.
