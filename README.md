# Web Design

# Video website

For this course I have made a video website, on which you can watch YouTube video's. You can filter the content to your liking. The website is built for a couple of specific persons, including Marie. [Prototype](https://robinfrugte97.github.io/web-design/)

# Herkansing

## Wat heb ik gedaan?

- Algemeen
  - Duidelijke richting in de site doormiddel van animaties.
- Filterpagina
  - Filters scrollen niet meer en vullen de pagina.
  - Redundante info weggehaald, filters zijn nu duidelijk genoeg.
- Overzichtpagina
  - Horizontale scroll per topic verwijderd. Video's staan nu in een soort grid positie, naast elkaar en onder elkaar.
  - Play button toegevoegd aan alle video's, het is nu duidelijk dat je ook daadwerkelijk kan klikken op de video's.
  - Redundante filter informatie weggehaald.
  - Jargon vervangen door logische verwoording.
  - Je kunt nu zien welke video's je hebt aangeklikt vanuit de overzichtpagina. De aangeklikte video's hebben een lagere opacity.
- Videopagina
  - Informatiebalk op de sidebar standaard open.
  - Jargon vervangen door logische verwoording.
  - Vorige en volgende video's aangeboden bij sport. Zo kun je lekker doorklikken.
  - Mogelijkheid toegevoegd om topic keuze aan te passen.

# Design principles

- Clarity (1).
- One primary action per state (6).
- Keep users in control (4).
- Strong visual hierarchy (11).
- Provide a natural next step (8).

1. I tried to make the functionality of the website as clear as possible, for example by adding the '+' & '-' next to the filters to make its purpose is to add and remove. I also tried to give a clear introduction to the site and its flow.
2. The site is made up of 3 primary actions. I tried to separate these actions to one per state. I have one state for filtering and starting off with the website. I have a second state for the filter result and an overview of videos. I have a third state for watching the video with information to the side being another state.
3. The website I made keep users in control. At all times you can do whatever you want. You can reach anywhere once you've selected your first topics.
4. I tried to add sufficient white space everywhere to add hierarchy. I tried to make the primary action of every state relatively large. I made the filter option very large in comparison, I made the topic headers very large aswell, but I put them in the background to give more attention to the videos.
5. The website gives the user as many natural next steps as possible. After you select the topics, you can click on any video. Once you've watched a video, you can click to watch the next one.

# Content inventory

- Introduction
- Content filter page
- Overview of filtered Youtube video's
- Video page
- Information per video

# Users

1. Marie
- Marie is a web designer. Marie is also deaf.
Marie is one of two people this website is being build for. Recently we had the opportunity to get some insights from her. There are a couple of things deaf people find important on the web. Sign-language is the primary language for most deaf people, including Marie. Sign-language has a different vocabulary to 'regular' language. Here are some of the insights Marie gave:

- Marie prefers short sentences. This makes it easier to understand what the text is about.
- Marie prefers the content to be 'To the point'. She want to understand what the website is about as quickly as possible. She is not looking for sweet-talk, it has to be direct.

2. Job
- Job is a 21 year old guy that studies Software Development by HvA. He enjoys spending time on the computer. He is a regular visitor to the YouTube website. He enjoys watching videos of certain topics.

# User scenario

- Marie is deaf. She is interested in watching some video's. She does not exactly know what she wants to see and where she wants to see them. Youtube can get real confusing for her because Youtube is not specifically built for deaf people. When the topic is brought up during a conversation with a friend of Marie's, Vids is mentioned. She tells Marie that Vids is built with deaf people in mind. Because Marie is interested in watching video's, she goes to the Vids website. Marie selects a couple of topics that seem interesting to her. She picks a video to watch and reads what the video is about in the information tab. She decides to pick some different topics to watch more video's.
- Job watches youtube video's regularly. He has a good idea of what he like to see and what not. He is reading about a new video site named Vids on a tech website. He decides to have a look. He selects the filters he is familiar with and watches a video. After he is done watching the video, he continues to watch a suggested video of the same topic. He continues until he watched all the video's of a certain topic.

# Feedback Week 1

## Points of attention

There was too much distraction from the main content of the site. The main content of the site, being the YouTube videos, did not get enough space and attention.

![](https://github.com/RobinFrugte97/web-design/blob/master/screenshot/Screenshot_2.png)

## Updated version

I remove a large part of the website and a large part of the styling. I did this in order to improve the visual hierarchy from the ground up. I split the remaining parts of the website in different parts so I could make the flow more apparent and give each part of the site a good hierarchy.

![](https://github.com/RobinFrugte97/web-design/blob/master/screenshot/new1.png)

![](https://github.com/RobinFrugte97/web-design/blob/master/screenshot/new2.png)

# Feedback Week 2

## Points of attention

There was too little context when you enter the website. You see some kind of filter but you don't know exactly what it's for. It was not clear what a user can do on the website. When you get passed the filter section, you had no feedback on what you had selected.

## Updated version

I added an introduction to the site, so users can know what to expect from the site.
I also added a section to the video overview page to let the user know what they filters they selected.

![](https://github.com/RobinFrugte97/web-design/blob/master/screenshot/updatedweek3.png)

# Test

I tested the website with Marie in person. I asked her to navigate through the website to find out if the flow was clear enough.

![](https://github.com/RobinFrugte97/web-design/blob/master/screenshot/test1.png)

[Test video](https://youtu.be/vMKvZgkUgUg)

Marie brought up interesting points:
1. On the overview page, she didn't think that fact that you can scroll is clear enough.
2. On the overview page, it was not clear enough that you had to click on the videos to open up the video player.
3. On the overview page, she thought the section where you can see your filter settings could be more clear. Sometimes it would seem like separate words formed a single one.
4. On the video player page, she thought it would be easier for her if the information section was opened by default, instead of closed by default. This way she can read about the video without clicking first. If she has enough she can always click to close the information section.

Here is how I can fix these problems:
1. [x] I can put the topics closer to each other, so more topics are visible in one view. I think this is also a form of progressive disclosure.
2. [x] I can add a play button on top of the videos, so it is more clear that they are clickable.
3. [x] I can add space around each filter item on the overview page, so it is more clear to the user what exactly they have filtered.
4. [x] I can have the information tab on the video player page be opened up by default. The user can instead close the tab if they don't want to see the information anymore.


# Todo

- [x] Add an introduction to the website to provide more context for the user.
- [x] Add more ways to filter content.
- [ ] Re-add the search function.
- [x] Add more information to the video pages such as subtitles, discription.
- [x] Re-add styling elements.
