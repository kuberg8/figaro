export const state = () => ({
  cards: [],
  cardsTitle: '',
})

export const actions = {
  async fetchCards({ commit }) {
    try {
      const { features, block_heading, assets_domain } = await fetch('https://test-task-frontend-2023.slava.digital', {
        method: 'POST',
      }).then((data) => data.json())

      const filteredCards = features
        .sort((a, b) => a.sorting - b.sorting)
        .map(({ image, ...other }) => ({
          image: image ? assets_domain + image : '',
          ...other,
        }))

      commit('SET_CARDS', filteredCards)
      commit('SET_CARDS_TITLE', block_heading)
    } catch (error) {
      console.log(error)
    }
  },
  addCard({ state, commit }) {
    const [firstCard, ...otherCards] = state.cards
    const sorting = state.cards.reduce((prev, item) => (prev <= item.sorting ? item.sorting + 1 : prev), 0)
    const newCard = {
      description:
        'Вращение стационарно заставляет иначе взглянуть на то, что такое нестационарный гироскопический стабилизатор.',
      image: 'https://test-task-frontend-2023.slava.digital/assets/img4.png',
      image_alt: 'нестационарный гироскопический стабилизатор',
      model_name: 'Figaro',
      sorting,
    }
    const newCards = [firstCard, newCard, ...otherCards].sort((a, b) => a.sorting - b.sorting)
    commit('SET_CARDS', newCards)
  },
}

export const getters = {
  getFigaroCards: ({ cards }) =>
    cards.filter(({ model_name, description, image }) => {
      return model_name === 'Figaro' && description && image
    }),
}

export const mutations = {
  SET_CARDS: (state, cards) => {
    state.cards = cards
  },
  SET_CARDS_TITLE: (state, title) => {
    state.cardsTitle = title
  },
}
