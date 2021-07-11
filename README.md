
# 👥 Box Shadow Club

A playground for creating and testing CSS `box-shadow` designs. Start from scratch or load an existing preset included for both light and dark modes.

<a href="https://boxshadow.club/"><img alt="Box Shadow Club" src="https://res.cloudinary.com/guillermoangulo/image/upload/v1626027892/box-shadow/vgedzbfry3qrbawcdqoy.png"/></a>

## Features
- **🖼️ Designs**. There are three components that make up the designs:
    - **Mode**. Context's colors. *Light* or *Dark* mode.
    - **Shape**. Element's shape. *Square* or *Circle*.
    - **Box Shadow**. The shadow(s) attached to the element.
- **📙 Collection**. When logging with a Github account you can save a design to your collection. They'll appear in your collection tab (within your account) and at the gallery.
- **🤏 Drag and drop code**. It is possible to drag and drop the lines on the terminal to change shadow's positioning. Try it!
- **🎴 Social Cards**. When saving a new design, it will be automatically added to the gallery gaining a customized open graph image. (On Twitter sometimes needs to be validated first [here](https://cards-dev.twitter.com/validator))
<div align="center">
    <img src="https://res.cloudinary.com/guillermoangulo/image/upload/v1625946870/box-shadow/dh5jlckldkpvoa9izbf3.png" alt="Box Shadow Social Card" width="200px" />
 </div>

💡 *Tip*: In case you need to fill the element with a color, just add a new shadow with `Inset` *marked* and `Color Opacity`, `Blur Radius` and `Spread Radius` set to *maximum*.  

## Technologies
This project uses, among others:
- [NextJS](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/) + CSS Variables
- [Supabase](https://supabase.io/)
- [react-hot-toast](https://react-hot-toast.com/)
- [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer)
- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)
- ...

## Figma Project
Want to take a look at the initial designs? Here is the [Figma document](https://www.figma.com/file/9BHWBRTmsx97RwOFLNwjx5/Box-Shadow?node-id=0%3A1) of the app

## Run Locally

To make run the app it is required to have a Supabase account. After creating a project, inside the `.supabase` folder there are three SQL files. Running these files inside the Supabase console will create the tables as they are used in the project.

Clone the project

```bash
  git clone https://github.com/GuilleAngulo/box-shadow.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  yarn install
```


Set the variables inside `.env.local`. Use the variables provided by Supabase

```
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Start the server

```bash
  yarn dev
```

  
## Acknowledgements

 - [React Avançado Boilerplate](https://github.com/React-Avancado/boilerplate)
