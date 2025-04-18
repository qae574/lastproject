const carData = [
  {
    id: 1,
    Brand: "Tesla",
    name: "Tesla Model 3 Standard Range Plus",
    price: 56690,
    fuel: "Electric",
    year: 2021,
    image: "https://s3-alpha-sig.figma.com/img/fc2a/9374/6b7debac70bd586ffc5162b782fe99a3?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rNNenjmGxTIMDMJViivqmpMdef92u5ZUKz51SixeUeobaCe6enaj~YkezsFZzVh0e1Q3cT2tsOW7JtVeabTZpjUdSl3EiIAdOgom4KpG6QOBOH1ci-CArh1IfelD4D853G9-2BIe0JXtfwXhoQjNIbJG2-2rODiaejfGxFaUBlhy98-RoAEwoqliypwZtyLnz3hkBYNpNIGH2YJ92TyIgHQiZ0fTi5nGFKu1Ql5PCRwMijsGjl6gOCu4yHU4msvTy3bfkdBDM7XlBFwbZy60jGjCnf4BprYGK5-00gEfReZrHMdSdMxuYDpa6lFhpvr9rd4zcGiNAkSv3dP0OsujdQ__",
    topSpeed: "140 mph",
    range: "263 miles",
    description: "Tesla Model 3 Standard Range Plus mang đến trải nghiệm lái mượt mà, tăng tốc nhanh và công nghệ hiện đại với màn hình trung tâm 15 inch. Phạm vi di chuyển khoảng 400 km đủ dùng cho hầu hết nhu cầu hàng ngày. Nội thất tối giản nhưng cao cấp, cùng với hệ thống Autopilot hỗ trợ lái tiện lợi.",
    body: "Sedan",
    seat: "5 people",
    color: "red",
    tramisson: "Automatic",
    power: "283 hp (211 kW)",
    Battery: "55.0-kWh",
    // Length: "64 km/h",
    port: "Type 2",
    Length: "4694 mm",
    Width: "1849 mm",
    Height: "1443 mm",
    Cargo: "542 L",
    model: "Model 3",
    Condition: "new",
    milage: "340km",
    Drivetrain: "Rear-wheel Drive",
    bodyType:"Sedan.",
  },
  {
    id: 2,
    name: "Ford F-250 Super Duty",
    price: 82098,
    fuel: "Diesel",
    year: 2021,
    image: "https://s3-alpha-sig.figma.com/img/9f71/f487/0c5548dd3dae848855b10ae36e4b6cc1?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fRa-8oIQne2Cp9jO730EM6ctO7wLso7RGUbwnHoXHlgMokKmLxHORmUxYSLhG-9KIpWPYAKK~9P9J75LvIugRoWVu8oiTaQqy2z~ZRjyhZ0fHujfntq5ntPm5fdoVjPLB1FvS-Kxuf-nYKP9XmwFQg3d41Gd4cgb4w3p~QwtzrZlDtJS9beS-XmeXR9X7CduQQlo8vh~2PZrnKOgNnabLaILRguzXCk8sAjA~SA9R2pcn3TZ~VAjyEiJ7spfwIq7eS2tXnvOm27FEKsp1hHU2N8xJyD4KjDaA4ksu8HAdKhCkaBBIqba~KLaHEboR97y0qziVv3-WFEeO05SfcsMdw__",
    body: "Sedan",
    seat: "5 people",
    color: "black",
    transmission: "Tự động 6 cấp",
    power: "385 mã lực (287 kW)",
    engine: "6.2L V8",
    Length: "5873 mm",
    Width: "2030 mm",
    Height: "1963 mm",
    Cargo: "Không xác định",
    model: "F-250 Super Duty",
    Condition: "Mới",
    mileage: "0 km",
    Drivetrain: "Dẫn động cầu sau hoặc 4 bánh",
    bodyType:"Truck.",
  },
  {
    id: 3,
    name: "Honda Pilot Touring 7-Passenger",
    price: 43735,
    fuel: "Gasoline",
    year: 2021,
    image: "https://s3-alpha-sig.figma.com/img/dd86/0b30/2a60add8a5dfbe912f104854ae0871cd?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iGV9qq0L618swMFFM89ib7mq-IytvYEtENcZf69fxih5wzPMO46J7izUX5f-Ctl7iEGuzEOspTf6LD4d4jUTkI7qSgkdKD9j6s1ApTz5A5BtXdgQuts-Hzr-JUky0F9ofHmLqmWaamnWL4BfLQCW445ki65Cqs5Bm9r0VBv9OXTsOrq6MEXdYPpE8QWQCxEnigJ6rt-nzSrASrSuAEi~qUhMlNg2vjt4wh~3dVTnpC9Y0Pjrlnj1iaxfFPJwWwi2W7D3Z2PMEJxGOphNnAzaaUem03p-RxMkd5It5JzCsHSEYTOXauKEChMbVAzBelg5SMAc~su6~RtIwzXx2wFZNQ__",
    transmission: "9-Speed Automatic",
    color:"Xanh dương",
    power: "280 hp",
    engine: "3.5L V6",
    Length: "196.5 inches",
    Width: "78.6 inches",
    Height: "70.6 inches",
    Cargo: "16.5 cu ft",
    model: "Pilot Touring 7-Passenger",
    condition: "new",
    mileage: "20 City / 27 Hwy",
    drivetrain: "Front-Wheel Drive",
    bodyType:"SUV.",

  },
  {
    id: 4,
    name: "Chevrolet Equinox LS",
    price: 42995,
    fuel: "Gasoline",
    year: 2021,
    image: "https://s3-alpha-sig.figma.com/img/8b73/d4a2/db015874b3f8b53dec7fbde4f326c10a?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=V1Jd3iRLiWjTlaRQwJXAcLQoLODfm8k4-xuCGBJ2dXk626yluurwWh0w9w6J0RPFeeiSENPKzgUXHT~9T6zcsroVtetGsx2TGBf3F7Ytmdi~QXk~uf9sZphveSdF2CynlrZSyWMVq9186ObzJv1pFnssUYeVfy0krs0myasT5JLKVBiW1CGdMzAQEIUBqhAv3BG3FUrQebDJUDdZ4TGe0GxFMx~BhOQZJYNsw~fZCTcb~JxggbSqYPaom4MtX9umc7jfM6umqsYS4tRcX-U7YgesVEfzGppe~Ug9~PNUGuwtToQ8KHwP~0VpzN5-a0VjbMjx-0G6o0hKI~Di-GdydQ__",
    transmission: "Automatic",
    power: "170 hp (127 kW)",
    engine: "1.5 L turbocharged I4",
    torque: "203 lb-ft (275 Nm) at 2,000–4,000 rpm",
    drivetrain: "Front-wheel Drive",
    Length: "183.1 inches (4,650 mm)",
    Width: "72.6 inches (1,844 mm)",
    Height: "65.4 inches (1,661 mm)",
    Cargo: "29.9 cu ft (846 L)",
    condition: "new",
    mileage: "340 km"
  },
  {
    id: 5,
    name: "Kia Sorento S",
    price: 29470,
    fuel: "Hybrid",
    year: 2021,
    image: "https://s3-alpha-sig.figma.com/img/73c3/4d34/6c8af05ab6f59497f2eea3d944b9bfca?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HEM6zWs~m87q6-2eNI3vuHW9yCHm~3FH34uI8jkFVNpRFcXWZf3bHc0DP7~ZXh-oDBxesSheqaYEnc-lqzU98UYIAdpvpx67h7SKOsguBRriVFhyiFit6YU4n4MH1JAm5hgichbiR2v1z1EOh3hNZtpjwZzSJvFDuwV3s~YPrVLj4g9GfJ6FOgWptgmNh4nsm5IpHyzVQ~TcESnHG3V3wyZpdDdx8lpS2nC4aiq66uuC8raydm9SRDOzjNn8vY6yAguVCyxYYlBoDV1Jsp7WO6FJUW3-wpMfuFfEeMzxMd-ZsUMq5d2JUt8YbqraSVvjpe4Ob7bBPcY2huLFXjD3MA__",
    transmission: "Automatic",
    power: "227 hp (169 kW)",
    battery: "1.5-kWh",
    charge: "N/A",
    port: "N/A",
    Length: "4810 mm",
    Width: "1900 mm",
    Height: "1700 mm",
    Cargo: "705 L",
    condition: "new",
    mileage: "N/A",
    drivetrain: "Front-wheel Drive"
  },
  {
    id: 6,
    name: "MINI Clubman Cooper S",
    price: 43895,
    fuel: "Gasoline",
    year: 2021,
    image: "https://s3-alpha-sig.figma.com/img/6d18/7118/6dfcf0e2027309d07acfc1a85d0d927a?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mYV1MLlcr7qurv7JdlV1JunOsW~PFNDDhO1Y~SYcEIojexAm3ChlTUG8pe5paJz~HJQqC-UpquqYrB2r8AnmlS95YKyGsItMP3Riv~Ct6aZNzUHgrWCRKkuOt9pSVW9UfKMswbeE5tBEciPaq7MpGZR2XoSYBERfeLVTnVdAAkHFbxXLwk8aElku2ep~XCXbl-6XO7Svb1AFZnrd9uuxjisRogCGzjJbI-~fDlhS5vRKaJ7nFjpNWM-N5vPKbRppnEWcduiD2hri6QxoU1Y-t2ifkkd-~kk9KP48f~lZ6YpwCqxi~0gde6jO9IfeW58LW1RdlzdcZGp1OF5l04aOow__",
    transmission: "Automatic",
    power: "192 hp (141 kW)",
    battery: "N/A",
    charge: "N/A",
    port: "N/A",
    Length: "4253 mm",
    Width: "1800 mm",
    Height: "1441 mm",
    Cargo: "360 L",
    condition: "new",
    mileage: "N/A",
    drivetrain: "Front-wheel Drive"
  }
];

export default carData;
