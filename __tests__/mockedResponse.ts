const mockedResponse = {
  data: [
    {
      id: 1,
      name: 'Backpack',
      description:
        'Uma mochila resistente com compartimentos secretos, ideal para aventureiros que precisam carregar uma variedade de itens essenciais em suas jornadas épicas.',
      image: 'https://softstar.s3.amazonaws.com/items/backpack.png',
      price: 182,
      createdAt: '2024-07-18T23:55:43.238Z',
      quantity: 5,
    },
    {
      id: 2,
      name: 'Boots of Ppeed',
      description:
        'Botas feitas de couro fino e tecido élfico, imbuidas com encantamentos mágicos que conferem velocidade sobrenatural a quem as usa, permitindo movimentos ágeis e fugas rápidas.',
      image: 'https://softstar.s3.amazonaws.com/items/boots-of-speed.png',
      price: 338,
      createdAt: '2024-07-18T23:55:43.238Z',
      quantity: 7,
    },
    {
      id: 3,
      name: 'Curved Blade',
      description:
        'Uma lâmina curva, afiada como o olhar de um predador, forjada por habilidosos artesãos orientais. Ideal para ataques furtivos e cortes precisos em combate corpo a corpo.',
      image: 'https://softstar.s3.amazonaws.com/items/curved-blade.png',
      price: 291,
      createdAt: '2024-07-18T23:55:43.238Z',
      quantity: 2,
    },
  ],
  metadata: {
    page: 1,
    limit: 20,
    count: 32,
    pageCount: 2,
    hasNextPage: true,
    hasPreviousPage: false,
  },
};

describe('mocked response', () => {
  it('should be defined', () => {
    expect(mockedResponse.metadata).toBeDefined();
    expect(mockedResponse.data.length).toBe(3);
  });
});

export default mockedResponse;
