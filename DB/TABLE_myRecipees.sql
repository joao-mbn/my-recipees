CREATE TABLE myRecipees (
  recipee_id CHAR(36) DEFAULT (UUID()),
  recipee_name TINYTEXT NOT NULL,
  ingredients TEXT NOT NULL,
  prepare_method TEXT
);
INSERT INTO
  myrecipees (recipee_name, ingredients, prepare_method)
VALUES
  (
    'Steamed Black Beans',
    '250g Black Beans',
    NULL
  ),
  (
    'Cooked Sweet Potatoes',
    '0.5Kg Sweet Potatoes',
    'Chop the potatoes; put on an pressure pot with water; cook it at 180ºC for 20 minutes, counted from the first pressure whistle.'
  );