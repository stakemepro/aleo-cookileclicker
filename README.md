# aleo-cookileclicker
Cookieclicker application written in Aleo zero-knowledge language

![image](https://user-images.githubusercontent.com/79249177/197739715-842acd73-4a8e-42e2-b412-a6c7b12f31e6.jpg)
## Requirements:
- NodeJS
- Aleo apps to compile and run


To install Aleo and Leo, run:
```
wget https://raw.githubusercontent.com/AleoHQ/workshop/master/install.sh && bash install.sh
```

# Install NodeJS v16.18.0 and NVM
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash && source ~/.bashrc && nvm install 16.18.0 && node -v
```

Build project:
```
npm run build
```

Start project:
```
npm run start
```
In case of successful launch, you can play cookieclicker in the terminal.</br>
It is enough to enter init, then claim several times to get points.</br>
To increase the level, you can write the levelup command.</br>
The is_levelup parameter indicates when you can level up.</br>
<img width="522" alt="изображение" src="https://user-images.githubusercontent.com/79249177/197742323-fa09468c-9164-4c2f-ace3-c59b10f31bf3.png">
