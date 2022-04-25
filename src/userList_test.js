Feature("userList");

Scenario("test something", ({ I }) => {
  I.amOnPage("/");
  I.click("Users");
  I.wait(5);
  I.see("Nombre");
  I.see("Correo");
  I.see("Nombre de usuario");
  I.see("Ver mas");
});
