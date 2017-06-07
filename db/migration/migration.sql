\connect skycast_development

CREATE TABLE IF NOT EXISTS weather (
  id BIGSERIAL PRIMARY KEY,
  summary VARCHAR(255),
  temp DECIMAL(5,2),
  feels_like DECIMAL(6,3),
  precip_prob DECIMAL(4,3)
);

CREATE TABLE IF NOT EXISTS location (
  id BIGSERIAL PRIMARY KEY,
  day DATE,
  address VARCHAR(255),
  latitude DECIMAL(12,8),
  longitude DECIMAL(12,8),
  weather_id INTEGER REFERENCES weather(id)
  -- description TEXT,
  -- image_url TEXT
);

