 require 'spec_helper'

describe Jobregistration do
 it "has a valid factory" do
 expect(build(:jobregistration)).to be_valid
 end
 it "is invalid without a name" do
 	 expect(build(:jobregistration, name: nil)).to \
      have(1).errors_on(:name)
 end
 it "is invalid without a age" do
    expect(build(:jobregistration, age: nil)).to \
      have(1).errors_on(:age)
 end
  it "is invalid with age<18" do
    expect(build(:jobregistration, age: '17')).to \
      have(1).errors_on(:age)
 end
 it "is invalid without a housenumber" do
    expect(build(:jobregistration, housenumber: nil)).to \
      have(1).errors_on(:housenumber)
    end
 it "is invalid without a street" do
    expect(build(:jobregistration, street: nil)).to \
      have(1).errors_on(:street)
 end
 it "is invalid without a village" do
    expect(build(:jobregistration, village: nil)).to \
      have(1).errors_on(:village)
 end
 it "is invalid without a district" do
expect(build(:jobregistration, district: nil)).to \
      have(1).errors_on(:district)
 end
 it "is invalid without a state"do
  expect(build(:jobregistration, state: nil)).to \
      have(1).errors_on(:state)
 end

 it "is invalid without a phone"do
    expect(build(:jobregistration, phone: nil)).to \
      have(2).errors_on(:phone)
 end
 it "phone is invalid violating numericality" do

  expect(build(:jobregistration, phone: '850020k13')).to \
      have(1).errors_on(:phone)
 end
 it "is invalid without a experience" do
    expect(build(:jobregistration, experience: nil)).to \
      have(1).errors_on(:experience)
 end
 it "is invalid without a qualification" do
    expect(build(:jobregistration, qualification: nil)).to \
      have(1).errors_on(:qualification)
    end
 it "is invalid without a attachment" do
    expect(build(:jobregistration, attachment: nil)).to \
      have(1).errors_on(:attachment)
 end
 it "is invalid without an email address"do
  expect(build(:jobregistration, email: nil)).to \
      have(2).errors_on(:email)
 end
 it "is invalid with invalid email address"do  
    expect(build(:jobregistration, email: 'testerexample.com')).to \
      have(1).errors_on(:email) 
 end
end
