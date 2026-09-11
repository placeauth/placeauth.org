# placeauth.org

Source for [placeauth.org](https://placeauth.org), the public website and documentation hub for the PlaceAuth project and Spatial Policy Protocol (SPP).

## About PlaceAuth

PlaceAuth is an open project exploring how physical places can publish machine-readable operational requirements for autonomous systems, robots, and other software-controlled machines.

The Spatial Policy Protocol (SPP) is the protocol work behind that effort.

The core protocol implementation and specification work lives in:

https://github.com/placeauth/spatial-policy-protocol

## Repository Purpose

This repository contains the source for the public PlaceAuth website, including:

- project information
- protocol documentation and explanations
- release information
- architecture and technical diagrams
- demonstrations and examples
- contributor and contact information

Protocol implementation code should generally remain in the main SPP repository rather than this website repository.

## Current Status

SPP is currently an experimental project.

Current public release:

**v0.3.0 Experimental Preview**

https://github.com/placeauth/spatial-policy-protocol/releases/tag/v0.3.0-experimental-preview

The normative SPP protocol version remains **SPP 0.1** unless otherwise stated in the protocol repository.

## Configuration

Public website configuration is stored in:

```text
site-config.js
```

This file contains public project metadata such as:

- website URL
- GitHub organization
- primary repository
- current release
- public contact addresses
- displayed project status

Secrets, credentials, private keys, tokens, and private infrastructure configuration must not be committed to this repository.

## Project Links

Website: https://placeauth.org

GitHub Organization: https://github.com/placeauth

SPP Repository: https://github.com/placeauth/spatial-policy-protocol

## Contact

General: hello@placeauth.org

Standards and protocol discussion: standards@placeauth.org

Security: security@placeauth.org

## License

See the repository license for terms applicable to the website source and content.