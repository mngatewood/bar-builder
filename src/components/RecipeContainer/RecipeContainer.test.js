describe("Recipe Container", () => {

  beforeEach(() => {

  });

  it.skip('matches the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

});