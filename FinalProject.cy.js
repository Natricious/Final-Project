describe('Test Cases', () => {
  it('რეგისტრაცია ცარიელი ველებით', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka/');
    cy.get('.rprof > svg').click();
    cy.get('.input-shablon > p > a').click();
    cy.get('.regsub').click();
    cy.get('#Group_15376').should('be.visible');
    
  })
  it('რეგისტრაცია, როდესაც სახელში ვწერთ სიმბოლოებს', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka/');
    cy.get('.rprof > svg').click();
    cy.get('.input-shablon > p > a').click();
    cy.get(':nth-child(1) > .ismile').type('!@#!@$ $@!$!@$');
    cy.get(':nth-child(2) > .imail').type('tessttt@tess45ttt4t.org');
    cy.get('.ipir').type('010288994940478757');
    cy.get(':nth-child(4) > .itel').type('15151645504321');
    cy.get(':nth-child(5) > .ipass').type('asdqwe123');
    cy.get('.reg-form-left > :nth-child(6) > .ipass').type('asdqwe123');
    cy.get('.etx > svg').click();
    cy.get('.regsub').click();
    cy.contains('პროფილი').should('be.visible');
  })
  it('ავტორიზაცია ვალიდური მონაცემებით', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka/');
    cy.get('.rprof > svg').click();
    cy.get(':nth-child(5) > .imail').type('zuranatroshvili1@gmail.com');
    cy.get('.ipass').type('asdqwe123');
    cy.get('.avtorization > .input-shablon > .form-button').click();
    cy.contains('პროფილი').should('be.visible');
    
  })
  it('ნივთის კალათაში დამატება და შესყიდვა „მაღაზიაში აღებით“', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka/');
    cy.get('.rprof > svg').click();
    cy.get(':nth-child(5) > .imail').type('zuranatroshvili1@gmail.com');
    cy.get('.ipass').type('asdqwe123');
    cy.get('.avtorization > .input-shablon > .form-button').click();
    cy.get('.popmenu-burger').click();
    cy.get('[imgsrc="/uploads/ProductCategory/335031597313845.png"] > [href="javascript:void(0)"]').click();
    cy.get('.cat-down.active > .category-holder > :nth-child(1) > .category-drop-title').click();
    cy.get('.category-holder > .active > :nth-child(2) > a').click();
    cy.get('.product-list > :nth-child(1)').click();
    cy.get('.add-pro').click();
    cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click();
    cy.get('#own-delivery').click();
    cy.get('.cart-submit').click();
    cy.origin('https://ecommerce.ufc.ge/ecomm2/ClientHandler', () => {
      cy.contains('გადაიხადე').should('be.visible')
    })
    })
    it('რამდენიმე ნივთის კალათაში დამატება და შესყიდვა Express მიწოდებით, ონლაინ გადახდით', () => {
      cy.visit('https://testzootopia.loremipsum.ge/ka/');
      cy.get('.rprof > svg').click();
      cy.get(':nth-child(5) > .imail').type('zuranatroshvili1@gmail.com');
      cy.get('.ipass').type('asdqwe123');
      cy.get('.avtorization > .input-shablon > .form-button').click();
      cy.get('.popmenu-burger').click();
      cy.get('[imgsrc="/uploads/ProductCategory/335031597313845.png"] > [href="javascript:void(0)"]').click();
      cy.get('.cat-down.active > .category-holder > :nth-child(1) > .category-drop-title').click();
      cy.get('.category-holder > .active > :nth-child(2) > a').click();
      cy.get('.product-list > :nth-child(1)').click();
      cy.get('.add-pro').click();
      cy.visit('https://testzootopia.loremipsum.ge/ka/category/121-%E1%83%9B%E1%83%A8%E1%83%A0%E1%83%90%E1%83%9A%E1%83%98-%E1%83%A1%E1%83%90%E1%83%99%E1%83%95%E1%83%94%E1%83%91%E1%83%98');
      cy.get(':nth-child(2) > .price-cart > .product-cart').click();
      cy.visit('https://testzootopia.loremipsum.ge/ka/category/121-%E1%83%9B%E1%83%A8%E1%83%A0%E1%83%90%E1%83%9A%E1%83%98-%E1%83%A1%E1%83%90%E1%83%99%E1%83%95%E1%83%94%E1%83%91%E1%83%98');
      cy.get(':nth-child(5) > .price-cart > .product-cart').click();
      cy.visit('https://testzootopia.loremipsum.ge/ka/category/121-%E1%83%9B%E1%83%A8%E1%83%A0%E1%83%90%E1%83%9A%E1%83%98-%E1%83%A1%E1%83%90%E1%83%99%E1%83%95%E1%83%94%E1%83%91%E1%83%98');
      cy.get(':nth-child(8) > .price-cart > .product-cart').click();
      cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click();
      cy.get('.nice-select').click();
      cy.get('[data-value="5"]').click();
      cy.get('.location').type('Tbilisi. G.Pheradze Street N5');
      cy.get('.cart-submit').click();
      cy.origin('https://ecommerce.ufc.ge/ecomm2/ClientHandler', () => {
        cy.contains('გადაიხადე').should('be.visible');
      })
    })
})
