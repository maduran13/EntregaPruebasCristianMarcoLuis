set numberRows=10
FOR /L %%G IN (0,1,numberRows-1) DO bundle exec kraken-mobile run --properties=kraken_mobile_properties_%%G.json