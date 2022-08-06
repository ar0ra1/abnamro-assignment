# abnamro-assignment

## features

- [x] Mobile friendly
- [x] Responsive (tested on Mobile - iPhone SE, iPhone 12 and Pixel, Tablet - Samsung A10, iPad, Laptop - 1024x768 & 1440x900, Desktop - 1920x1080)
- [x] genres
- [x] unit tests
- [x] search
- [x] show page

## Libraries

- Vue 3
- Axios
- Tailwind

## Architecture

- Components: Ideally, they can be extended to be more generic in nature, but this use case didn't fit the case. e.g., TransitionState is generic in nature and can easily extend for any error / message handling purpose.
- Used the basic vue rather than nuxt or any other library/framework because it was better to start with the basics. I wanted to see how Vue works under the hood first. 
- Tailwind: well, wasn't really in a mood to type a lot of css :)


## Things I would have differently

- Better way of dealing with search and genre together
  - track everything under one object and use reduce for each filter type
- (maybe) use more component for dealing with repeated data (language, genres, rating etc...); but the styling was different and required a similar interface throughout then
- more in-depth testing, this is just basics of jest and testing library. Apparently, testing on Vue applications is much harder than on React.
- Do a proper commit history, React app has it but not this one. I wrote this in one night and didn't think much about version controlling since I had a react based app to refer to. 

## CLI

- `yarn dev` to start (do install using yarn first)
- or use docker `docker compose -f docker-compose.yml up --build`
- `yarn test` to test