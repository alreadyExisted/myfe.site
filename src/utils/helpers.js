export function formatPostDate(date, lang) {
  if (typeof Date.prototype.toLocaleDateString !== 'function') {
    return date
  }

  date = new Date(date)

  const args = [
    lang,
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }
  ].filter(Boolean)

  return date.toLocaleDateString(...args)
}

export const getPublicUrl = data => {
  const {
    allFile: {
      edges: [
        {
          node: { publicURL }
        }
      ]
    }
  } = data
  return publicURL
}
