if ENV["ADB_DEVICE_ARG"].nil?
  require 'kraken-mobile/steps/web/kraken_steps'

  Then(/^I store a variable with the current url$/) do
    $url_variable = @driver.current_url    
    File.write('./.variable.txt', $url_variable)
    puts($url_variable) 
  end
  
  Then(/^I click on element having text (.*)$/) do |value|
    @driver.find_element(:link_text, value).click()
  end
 
  Then(/^I click on element having xpath (.*)$/) do |value|
	@driver.find_element(:xpath, value).click()
  end

  Given(/^I navigate to page with the url stored in the variable$/) do
    $url_variable = IO.read("./.variable.txt")  
    puts($url_variable)
    @driver.navigate.to $url_variable
    sleep 2
  end
end