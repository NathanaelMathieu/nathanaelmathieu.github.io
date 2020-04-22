import React from "react";
import { Text } from "../../../components";

export const t1 = <Text text=
{
`My hopper design went through many iterations as I approached a stable, reusable design. My initial design goal was to have a calculable timing mechanism; I had been told that the timing mechanism was the harder part of the hopper/timer combo, and decided to focus on a very good system from the start. This led me, almost immediately, to pendulums. Because they are periodic and fairly contained, I felt certain that they would work effectively right off the bat.
`
}
/>;

export const t2 = <Text text=
{
`
A long series of prototypes eventually led me to realize first that counting each swing was difficult, and second that the weight distribution was critical to making it swing in an effective way. I ended up opting for a pickaxe-like shape that held plenty of mass far away from the center of rotation, producing a very consistent swing stabilized by the 1/4" Medium Density Fiberboard. Slots in the pendulum would hold a counter that would bounce back and forth between each side until it reached the bottom where it could make contact with a trigger.
`}
/>;

export const t3 = <Text text=
{
`Design challenges arose once the pendulum had been worked out; specifically, I needed a jumping mechanism that would effectively propel the hopper without breaking it. I initially planned to have the pendulum dislodge some sort of retaining strap or clamp, triggering some sort of launch. To achieve the launch, a system of tubing held in tension with a long rod was restrained by fishing line.
After trying and failing to find a way to dislodge the fishing line reliably, a basic rocket-igniter circuit was set up to melt the line and release the rod. This had the effect of less of a hop and more of a lift-into-the-air-then-flip, but it was still covered under the definition of a hop. Best of all, it never failed a test. Reliability was one of the critical characteristics I had sought, so I was excited so have succeeded to have achieved it.
`}
/>;
