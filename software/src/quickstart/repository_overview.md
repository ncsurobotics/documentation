[SW9S]: https://github.com/ncsurobotics/SW9S
[AUVControlBoard]: https://github.com/ncsurobotics/AUVControlBoard
[SW9-MSB]: https://github.com/ncsurobotics/SW9-MSB
[SW9S-IsaacSim]: https://github.com/ncsurobotics/SW9S-IsaacSim
[SW9S-GazeboSim]: https://github.com/ncsurobotics/SW9S-GazeboSim

# Repository Overview
The repository overview is a breakdown of all of the repositories that make up the software stack, what they do, and how they fit together.

## Current Repositories

| Repository | Description | Documentation |
| --- | --- | --- |
| [SW9S] | The main codebase for SeaWolf 9. It receives sensor data, uses that data to make decisions, then sends commands to the locomotion and manipulation systems. | [Rust docs](/software/external/rust/sw9s/) |
| [AUVControlBoard] | PCB designs, firmware, Python library, and Rust libraries for AUVControlBoard. SW9S uses the Rust library to move the robot and receive depth and orientation data from the control board. | [Project docs](https://mb3hel.github.io/AUVControlBoard/)<br>[Rust docs](/software/external/rust/auv_control_board/) |
| [SW9-MSB] | PCB designs, firmware, and Rust library for SeaWolf 9's manipulation systems board (MSB). SW9S uses the Rust library to operate peripherals like the torpedo launchers, marker dropper, and grabber. | Not yet published |
| [SW9S-IsaacSim] | The Isaac Sim simulator for SeaWolf 9. Currently a work in progress. | Not yet published |
| [SW9S-GazeboSim] | The Gazebo Sim simulator for SeaWolf 9. Currently a work in progress. | Not yet published |

## Legacy Repositories

| Repository | Description |
| --- | --- |
| SW8S-Rust | The core codebase for SeaWolf 8. |
| SW8S-UnitySimulator | The simulator used for SeaWolf 8. |
