[SW9S]: https://github.com/ncsurobotics/sw9S/
[AUVControlBoard]: https://github.com/ncsurobotics/AUVControlBoard
[SW9-MSB]: https://github.com/ncsurobotics/SW9-MSB
[SW9S-IsaacSim]: https://github.com/ncsurobotics/SW9S-IsaacSim
[SW9S-GazeboSim]: https://github.com/ncsurobotics/SW9S-GazeboSim

# Repository Overview
The repository overview is a breakdown of all of the repositories that make up the software stack, what they do, and how they fit together.

## Current Repositories
### [SW9S]
SW9S is the main codebase for SeaWolf 9. At a high level, it receives sensor data, uses that data to make decisions, then acts on them by sending commands to the locomotion and manupulation systems.

### [AUVControlBoard]
This repository contains the PCB designs, firmware, Python library, and Rust libraries for the AUVControlBoard project. SW9S uses the Rust library to send commands to SeaWolf's control board to move the robot and recieve depth and orientation data. 

### [SW9-MSB]
This repository contains the PCB designs, firmware, and Rust library for SeaWolf 9's manipulation systems board (MSB). SW9S uses the Rust library to send commands to the MSB to operate peripherals like the torpedo launchers, marker dropper, and grabber.

### [SW9S-IsaacSim]
The Issac Sim simulator for SeaWolf 9. It is currently a work in progress.

### [SW9S-GazeboSim]
The Gazebo Sim simulator for SeaWolf 9. It is currently a work in progress.

## Legacy Repositories
### SW8S-Rust
The core codebase for SeaWolf 8

### SW8S-UnitySimulator
The simulator used for SeaWolf 8
