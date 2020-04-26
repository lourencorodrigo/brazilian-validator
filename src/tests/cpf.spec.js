const cpf = require("../cpf");

describe("cpf validation", () => {
  describe('validate', () => {
    it("should return true to valid cpf wythout hyphen and points", () => {
      expect(cpf.validate("14552586017")).toBeTruthy();
    });
  
    it("should return true to valid cpf with hyphen and points", () => {
      expect(cpf.validate("145.525.860-17")).toBeTruthy();
    });
  
    it("should return false with letters", () => {
      expect(cpf.validate("14552586017a")).toBeFalsy();
    });
  
    it("should return false to invalid cpf wythout hyphen and points", () => {
      expect(cpf.validate("00011122233")).toBeFalsy();
    });
  
    it("should return false to invalid cpf with hyphen and points", () => {
      expect(cpf.validate("000.111.222-33")).toBeFalsy();
    });
  });

  describe('random', () => {
    it('should create a random cpf valid', () => {
      expect(cpf.validate(cpf.generate())).toBeTruthy();
      expect(cpf.validate(cpf.generate())).toBeTruthy();
      expect(cpf.validate(cpf.generate())).toBeTruthy();
    });
  });
});
