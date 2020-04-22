import React from "react";
import { Text } from "../../../components";

export const t1 = <Text text=
{
`This project, or rather a series of projects, was undertaken in COMP 360A - Artificial Intelligence. We studied a combination of classical artificial intelligence and more modern concepts, all built around the framework of the Berkley Pacman Project. As with other coding projects, I would share my source code here but the creators of the project would prefer solutions to not be shared publicly.
The adjacent maze represents a portion of the search project. We were instructed to write search algorithms of various types: Depth First, Breadth First, Uniform Cost, and A*. This included exploring heuristics and a fair amount of problem solving. All three algorithms other than A* were ones that I had covered during previous classes, specifically Algorithms and Data Structures, so this project was fairly trivial. I spent much of my time considering different heuristics for A* to use. A heuristic is used to estimate the value of a state or action, and by comparing different values, the best action or future state can be chosen. For the scope of this pacman project, more simple heuristics were generally more effective.
`
}
/>;

export const t2 = <Text text=
{
`Project 2 introduced some different algorithms to take into account multiple factors. These were generally centered around Minmax trees but touched on different aspects of implementation such as efficiency and correctness. Alpha Beta pruning, in particular, was a compelling concept. Rather than evaluating all possible outcomes to a certain depth, you ignore ones that you can logically eliminate based on the rules set forward. The exact implementation was somewhat tricky, but as with much of the work spent on these projects, it was essentially just translating pseudo code into python and then debugging it.
`}
/>;

export const t3 = <Text text=
{
`As we dove deeper into AI concepts, I began to feel more confident about my abilities to code the necessary algorithms. The third project was particularly challenging, using reinforcement learning algorithms to teach the AI to make better decisions. These algorithms felt like they were beyond me in terms of theory. When I sat down to write them, however, I found it much easier to wrap my head around. This sort of aggressive prototyping is something that I often do in other projects, but not one that I had tried much in code-based ones. I will certainly do more of it in the future. `}
/>;

export const t4 = <Text text=
{
`
 Looking back, the most valuable part of these projects was the Evaluation Function in Project 2. The goal was to write an evaluation function for states, and this required far more thought other portions of the class. As in the previous project, I started with fairly simple evaluations of distance from pellets and ghosts. This was met with moderate success. I pushed on with far more complex additions to the simple calculations and had practically no success. In the end, the best function I could muster took only a few basic things into account and performed adequately, but not particularly well. Once again, I had found that complex solutions were not as successful as simple ones, even if both came up short.`
}
/>;
