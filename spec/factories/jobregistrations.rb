FactoryGirl.define do
 factory :jobregistration do
    name "paramesh"
      age "20"
      housenumber"254/b"
      street "sr nagar"
      village "ameerpet"
      district "rangaredyy"
      state "Telangana"
      phone "8500209136"
      experience "2"
      qualification "B.tech"
      attachment "app/assets/images/common.jpg"
      
 sequence(:email) { |n| "text#{n}@example.com"}
 end
 end
