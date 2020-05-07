describe('My first test', function() {
  before(function() {
    cy.clearLocalStorageCache();
  });

  beforeEach(() => {
    cy.restoreLocalStorageCache();
  });
  
  afterEach(() => {
    cy.saveLocalStorageCache();
  });

  it('successfully loads ', function() {
    cy.visit('/');
  });

  it('Should successfully Login up ', function() {
    cy.get('[type=email]').type('test@gmail.com')
      .get('[type=password]').type('11231123');
    cy.contains('Login').click();
  });

  it('Should successfully Select  a team ', function() {
    cy.contains('맨유').click();
  });

  it('Should successfully write a notice', function() {
    cy.get('textarea').type('당분간 모두 푹 쉬세요');
    cy.contains('Post').click();
  });

  it('successfully see formation menu ', function() {
      cy.contains('Formation').click()
      cy.contains('Change').click()
  });

  it('successfully register new match ', function() {
    cy.contains('Match').click()
    cy.contains('Change').click()
      .get('[type=date]').type('2020-03-25')
      .get('[type=time]').type('15:00')
      .get('[placeholder=상대팀이름]').type('맨시티')
      .get('[placeholder=장소이름]').type('잠실역')
    cy.contains('Save').click()
});

  it('Should successfully use forum menu ', function() {
    cy.contains('Forum').click()
      .get('.likeIcon').click()
      .get('.likeIcon').click()
      .get('.commentIcon').click()
      .get('[placeholder=Write]').type('저도입니다 ㅠㅠ')
      .get('[placeholder=Write]').siblings('[type=submit]').click()
      .get('.deleteButton').click()
  });

  it('Should successfully use forum menu ', function() {
    cy.contains('Finance').click()
    cy.contains('New').click()
      .get('[type=month]').type('2020-05')
      .get('[placeholder=수입]').type('200000')
      .get('[placeholder=지출]').type('200000')
      .get('[placeholder=경기장대여]').type('150000')
      .get('[placeholder=음식]').type('20000')
      .get('[placeholder=장비]').type('20000')
      .get('[placeholder=기타]').type('10000')
    cy.contains('Save').click()
    cy.wait(1000)
    cy.contains('New').click()
      .get('[type=month]').type('2020-03')
      .get('[placeholder=수입]').type('300000')
      .get('[placeholder=지출]').type('300000')
      .get('[placeholder=경기장대여]').type('250000')
      .get('[placeholder=음식]').type('30000')
      .get('[placeholder=장비]').type('20000')
      .get('[placeholder=기타]').type('0')
    cy.contains('Save').click();
    cy.contains('Prev').click();
    cy.contains('Next').click();
    cy.contains('Delete').click();
    cy.wait(2000)
    cy.contains('Delete').click();
  });

  it('Should show members menu successfully', function() {
    cy.contains('Members').click();
  });

  it('Should logout successfully', function() {
    cy.contains('Log out').click();
  });
});
