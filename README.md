# portfolio
A portfolio where you open the website and it starts off with a book and my picture on the cover. Then it will open to a table of contents where it shows all the chapters of the book


Cover
Table of Contents 
(listed with each chapter and their page. Each chapter name should be clickable)
Chapters:
About me 
Experience
Projects
Extracirculars
Skills 
Schooling timeline
Resume
Contact me

Then to avoid tedious scrolling, we have a bottom bar, showing the progress and as you scroll you can flip/go through the bar. Also be able to click on the names under the bar to scroll straight towards it (quick jumping)
Kaitlyn's Portfolio  ━━━━━●────────────
Cover | About | Experience | Projects | Skills | Contact

[01 Cover] [02 About] [03 Experience] [04 Projects] [05 Skills] [06 Contact]
Framer motion + intersection observer


Start witht he foundation, just a normal portfolio website and then add the creativity later on 

Architecture: 
[Book Cover]
Kaitlyn Jao
Software Engineering Portfolio

↓ scroll

[Table of Contents]
01 About Me
02 Experience
03 Projects
04 Skills
05 Contact

↓ scroll

[Chapter Pages]
About Me
Experience Timeline
Projects
Skills
Contact

Bottom bar:
Cover | About | Experience | Projects | Skills | Contact


Code Architecture:
kaitlyn-portfolio/
  src/
    components/ → reusable UI pieces
      BookCover.tsx
      TableOfContents.tsx
      ChapterProgressBar.tsx
      ProjectCard.tsx
      ExperienceTimeline.tsx
      SkillsGrid.tsx

    sections/ → large page sections
      CoverSection.tsx
      AboutSection.tsx
      ExperienceSection.tsx
      ProjectsSection.tsx
      SkillsSection.tsx
      ContactSection.tsx

    data/ → portfolio content
      projects.ts
      experience.ts
      skills.ts

    App.tsx → main file that assembles the website
    Main.tsx → file that tells React to render your application into the browser 

