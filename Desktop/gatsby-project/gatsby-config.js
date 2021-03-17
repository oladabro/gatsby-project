/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
// w tablicy plugins wpisujemy nasze plaginy, wcześniej zainstalowałam npm install gatsby-source-filesystem (ze strony gatsby plugins). Po odpaleniu w graphql możemy zadawać query file albo allFiles. Każdy plik to node więc idziemy do nodes. Jeśli weźmiemy relative path tam znajdziemy nasze pliki ze ścieżką. Jeśli chcemy by zaglądał do klilku katalogów to musimy dodać je do obserwowanych wtedy pokaże nam wszystkie pliki. Ale jeśli chcemy by zaglądnął tylko do jednego katalogu/źródła wtedy możemy do naszego query dorzucić filtr i sourceInstanceName: eq = 'projects'

// md stands for markdown file
// by moc przetworzyć md file i użyć go w naszym html musimy zainstalować plugin npm install gatsby-transformer-remark i wpisać do naszych pluginów

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-remark`,
    // `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `notes`,
    //     path: `${__dirname}/src/notes/`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata: {
    title: "Happy Girl",
    description: "my first blog",
    copyright: "This website is copyright 2021 Happy Girl",
    contact: "me@happygirl.pl",
  },
}
