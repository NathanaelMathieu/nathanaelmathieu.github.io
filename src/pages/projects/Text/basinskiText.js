import React from "react";
import { Text } from "../../../components";

export const t1 = <Text text=
{
`
Basinski is named after and inspired by the Avant-garde composer William Basinski. Designed as an installation piece, Basinski analyzes our relationship with memory, time, and emotion. A simple time lapse of a sunset plays on a screen with a webcam as the song dlp 1.1 plays in the background. dlp 1.1 comes from William Basinski' The Disintegration Loops, a series of short magnetic tape loops played as the magnetic material that represents their sound falls off. As the viewer observes the sunset and the hour long song plays, they begin to notice that their movements change the image.
`
}
/>;

export const t2 = <Text text=
{
`As the song loops, the sunset begins to show them watching it. The webcam video continues to blend into the sunset until they are deeply connected. The tape continues to degrade. The sunset loses its color as the webcam becomes more apparent in the bright areas of the video. Near the end of the hour, almost none of the sunset remains. The sun is there, but the rest is just a tint on the screen. The song fades to darkness, and the video fades to black.
This piece was ambitious for numerous reasons. I committed to it during a very difficult time in my life. Both of my remaining grandparents entered hospice and passed away within a week of each other, provoking a lot of painful thoughts and emotions. I decided to channel that into the piece, writing a program that would meld the now into the past.
`}
/>;

export const t3 = <Text text=
{
`The Disintegration Loops have always reminded me of how fleeting our time is, and how our memory is even more fleeting. The sunset is meant to represent a beautiful memory that is fading with every passing day. As we remember it, or observe the video, we affect it, inserting ourselves into that place. We experience it for what it is now; a memory, and not for what it was. These changes stack until the memory is all but gone.
I wasn't sure how I would implement this program, but committed to using Processing and interacted with the libraries directly using Java. My most critical accomplishments in terms of code were two functions that considered whether the video was being observed.
`}
/>;

export const t4 = <Text text=
{
`
Changes in the RGB levels of the room and noise threshold on the mic would trigger the function that, with some randomness, faded in the webcam footage. This slow fade produced a noticeable effect if you watched for five or more minutes, but not if you watched a few loops of the sunset and then walked away.
While this project is probably the one I am most proud of, I have been thus far unable to make a portable copy that can be viewed by others. The code is, similarly, not accessible at present. I hope to have both public in the near future.`
}
/>;
