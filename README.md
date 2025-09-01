# NodeLink

NodeLink is a secure decentralized messaging framework designed for privacy-preserving, censorship-resistant, and offline-first communication.  
It leverages modern cryptography, blockchain-based authentication, and peer-to-peer networking to eliminate reliance on centralized servers.

---

## ✨ Core Features

- 🔐 **End-to-End Encryption (E2EE)**
  - ECDH (Elliptic Curve Diffie–Hellman) → Secure key exchange
  - ECDSA (Elliptic Curve Digital Signature Algorithm) → Authentication
  - AES-256-GCM → Message confidentiality + integrity
- 🌍 **Decentralized Storage**
  - GunDB → P2P data sync
  - Supabase → Reliable fallback storage
- 📱 **Wallet Authentication**
  - Ethereum wallet login with MetaMask / WalletConnect
- 📶 **Offline-First Messaging**
  - Local storage with SQLite/AsyncStorage
  - Auto-sync on connectivity restore
- ⚡ **Cross-Platform**
  - Works on Android, iOS, Web via React Native + Expo

---

## 🏗️ Architecture Overview

1. **Cryptographic Workflow**
   - Alice & Bob exchange public keys → derive shared symmetric key (ECDH).
   - Each message is encrypted with AES-256-GCM using a unique nonce.
   - Messages are signed with ECDSA to prevent tampering & spoofing.

2. **Networking**
   - Primary: GunDB peer-to-peer mesh
   - Fallback: Supabase (when peers unavailable)

3. **Storage**
   - Local: AsyncStorage / SQLite
   - Remote: GunDB + Supabase

4. **Authentication**
   - Users log in with Ethereum wallets (MetaMask/WalletConnect).
   - Session keys are ephemeral (forward secrecy).

---

## 🚀 Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/your-username/nodelink.git
cd nodelink
```

### 2. Install Dependencies

**Step A – Align React + React-DOM**

React, React-DOM, and React-Native-Renderer must always be in sync:

```sh
npm install react@19.1.1 react-dom@19.1.1 --save
```

**Step B – Install required libraries**

```sh
npm install @stream-io/flat-list-mvcp web-streams-polyfill@3.0.3
```

**Step C – Install all project dependencies**

```sh
npm install
```

> ⚠️ If you face peer dependency conflicts, run:
> 
> ```sh
> npm install --legacy-peer-deps
> ```

### 3. Environment Variables

Create `.env` in the project root:

```
# Supabase
SUPABASE_URL=https://myoursupabasekeyphh.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOi...

# WalletConnect
WALLETCONNECT_PROJECT_ID=your-walletconnect-project-id

# GunDB
GUN_PEERS=https://your-gun-peer-server.com/gun

# Encryption Secret (32-byte secure key)
ENCRYPTION_SECRET=your-32-byte-secret

# Expo / APIs
EXPO_PUBLIC_API_URL=https://api.yourdomain.com
CUSTOM_API_URL=https://api.yourcustomservice.com
```

**Best Practices:**
- Never commit `.env` with real keys.
- Add `.env.example` with placeholders for contributors.
- Prefix with `EXPO_PUBLIC_` if Expo needs access.

### 4. Running the Project

Start development server:

```sh
npx expo start
```

Run on specific targets:

```sh
npm run android   # Run on Android emulator/device
npm run ios       # Run on iOS simulator (Mac only)
npm run web       # Run in browser
```

Clear Metro bundler cache if issues occur:

```sh
expo start -c
```

---

## 📜 npm Scripts

- `npm start` — Start Expo dev server
- `npm run android` — Run on Android
- `npm run ios` — Run on iOS (macOS only)
- `npm run web` — Run in browser
- `npm run lint` — Check code quality
- `npm run test` — Run Jest unit tests
- `npm run reset-project` — Reset cache & dependencies

---

## ⚠️ Troubleshooting

1. **React / Renderer Version Mismatch**

   **Error:**
   ```
   Incompatible React versions:
   react: 19.1.1
   react-native-renderer: 19.0.0
   ```

   **Fix:**
   ```sh
   npm uninstall react react-dom
   npx expo install react react-dom react-native
   ```

2. **Peer Dependency Errors**

   Use:
   ```sh
   npm install --legacy-peer-deps
   ```

3. **Env Not Loading**

   Ensure `.env` exists and install:
   ```sh
   npm install react-native-dotenv
   ```

4. **Metro Bundler Cache**

   ```sh
   expo start -c
   ```

---
5. **Recommended Fixes**

A - Lock React & React-DOM to 19.0.0 

```sh
npm install react@19.0.0 react-dom@19.0.0 --save
```

B - Reinstall clean
```sh
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

C - Check outdated libraries

D - Replace react-native-country-picker-modal if it blocks builds.

E - Otherwise, keep using --legacy-peer-deps.

F - Verify Expo alignment
```sh
npx expo doctor
```

This checks if versions align with Expo SDK 53.

## 🛡️ Security Guidelines

- Never reuse nonces in AES-GCM
- Private keys are never stored, only derived per session
- Enforce forward secrecy with ephemeral keys
- Use secure 32-byte secrets (`openssl rand -base64 32`)
- Always validate signatures before processing messages

---

## 📌 Roadmap

- ✅ Secure 1:1 encrypted chat
- Secure group messaging (MLS / ART protocol)
- WebRTC transport for voice/video
- Push notifications (APNs/FCM)
- Encrypted media/file sharing

---

## 🤝 Contributing

1. Fork the repository
2. Create a new feature branch (`feature/my-feature`)
3. Commit changes with clear messages
4. Open a Pull Request

**Lint before pushing:**
```sh
npm run lint
```

**Run tests:**
```sh
npm run test
```

---

## 📜 License

MIT License © 2025 NodeLink Team
### 👨‍💻 Author

**Za.i.14** - Creator and Lead Developer

### 🙏 Acknowledgments

- Gun.js team for the decentralized database
- Supabase for the backend infrastructure
- MetaMask for wallet integration
- CoinGecko for cryptocurrency market data

### 📞 Support

For support and questions:
- Open an issue on GitHub
- Contact the development team
- Check the documentation for common solutions

---

*Built with ❤️ for the decentralized web*
### Contact
For more information, please contact Zai14 through his Socials:
 [![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white)](https://instagram.com/Za.i.14) [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/zai14) [![X](https://img.shields.io/badge/X-black.svg?logo=X&logoColor=white)](https://x.com/Za_i14) [![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?logo=YouTube&logoColor=white)](https://youtube.com/@Za.i.14) [![email](https://img.shields.io/badge/Email-D14836?logo=gmail&logoColor=white)](mailto:ZaidShabir67@gmail.com) 
.