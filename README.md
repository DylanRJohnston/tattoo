# tattoo

**WIP**, A program to deterministically generate a [Vegvísir](https://en.wikipedia.org/wiki/Vegv%C3%ADsir) like tattoo design from a quantum random number generator, [live preview](https://dylanrjohnston.github.io/tattoo/).

## Why? ##
Under Hugh Everett's "Many Worlds" interpretation of quantum mechanics the wave function never undergoes collapse but instead the universe "splits" into each of the possible outcomes. Therefore the apparent randomess of quantum mechanics is a result of a lack of information about our location in the larger multiverse. If you know the encoding (the program used to generate the tattoo) then the tattoo can be decoded back into the number it was generated from and visa versa. Thus the tattoo acts as an address (albeit incomplete) of our location in the multiverse. Other parts of the multiverse that were split with the creation of the tattoo will experience different designs / different addresses.

## TODO ##
- [x] Add storybook
- [x] Revert to absolute coordinates instead of using nested transforms. Too many issues with preserving shape size.
- [ ] Add all sigils
  - [x] Three arms
  - [x] Five arms
  - [x] Fountain
  - [x] Altar
  - [ ] Football
  - [ ] Forest
- [ ] Add all decorators
  - [x] Three lines
  - [x] Half circle
  - [x] Half circle with line
  - [x] Two half circles with line
  - [x] Two half circles with dots
- [x] Lehmer codes
- [ ] Quantum Random Number genenerator API
- [ ] Interactive mode

