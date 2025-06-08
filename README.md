# 🥗 Site da Nutricionista Amanda Tavares

## 📋 Sobre o Projeto

Site profissional da nutricionista **Amanda Tavares** (CRN-0: 00000), desenvolvido como uma plataforma completa para serviços de nutrição online. O projeto oferece uma experiência moderna e acessível, combinando design responsivo com funcionalidades práticas para agendamento e acompanhamento nutricional personalizado.

> *"Perda de peso, energia, bem-estar, saúde e vida plena"*

**🎯 Última atualização:** Junho de 2025 - Correções de navegação e otimizações de links implementadas

## ✨ Funcionalidades Principais

### 🏠 Site Institucional
- **Página Inicial**: Apresentação da profissional e serviços
- **Trajetória**: História e especialidades da nutricionista
- **Artigos**: Conteúdo educativo sobre nutrição
- **Termos de Uso**: Políticas e diretrizes da plataforma

### 🏥 Clínica Virtual
- **Agendamento Online**: Sistema de marcação de consultas
- **Login/Registro**: Área do paciente
- **Dashboard**: Painel de controle para acompanhamento
- **Consultas por Vídeo**: Atendimento remoto humanizado
- **Planos Alimentares Personalizados**: Dietas individualizadas

### 📱 Recursos Especiais
- **Design Responsivo**: Otimizado para mobile e desktop
- **Integração WhatsApp**: Contato direto via WhatsApp
- **Animações AOS**: Experiência visual aprimorada
- **Interface Moderna**: Design limpo e profissional

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica
- **CSS3**: Estilização e responsividade
- **JavaScript**: Interatividade e funcionalidades
- **Bootstrap 5**: Framework CSS para design responsivo

### Bibliotecas e Plugins
- **AOS (Animate On Scroll)**: Animações de scroll
- **BaguetteBox**: Galeria de imagens
- **Google Fonts**: Tipografias (Libre Baskerville, Inter)

### Ícones e Assets
- **Tabler Icons**: Ícones SVG modernos
- **Bootstrap Icons**: Ícones complementares
- **Imagens WebP**: Otimização de performance

## 📁 Estrutura do Projeto

```
nutri/
├── 📄 index.html              # Página principal
├── 📄 about.html              # Trajetória da profissional  
├── 📄 terms.html              # Termos de uso e LGPD
├── 📄 README.md               # Documentação do projeto
├── 📂 assets/                 # Recursos estáticos
│   ├── 📂 bootstrap/          # Framework Bootstrap 5
│   │   ├── 📂 css/           # Estilos do Bootstrap
│   │   └── 📂 js/            # Scripts do Bootstrap
│   ├── 📂 css/               # Estilos customizados
│   │   ├── animate.min.css   # Animações CSS
│   │   ├── aos.min.css       # Animate On Scroll
│   │   ├── baguetteBox.min.css # Galeria de imagens
│   │   ├── bss-overrides.css # Customizações Bootstrap
│   │   └── Features-Large-Icons-icons.css # Ícones
│   ├── 📂 js/                # Scripts JavaScript
│   │   ├── aos.min.js        # Animações de scroll
│   │   ├── baguetteBox.min.js # Galeria
│   │   ├── bs-init.js        # Inicialização Bootstrap
│   │   └── template.js       # Scripts customizados
│   └── 📂 img/               # Imagens e mídia
│       ├── 🖼️ back.webp      # Background principal
│       ├── 🖼️ n1.webp, n2.webp, n3.webp # Fotos profissionais
│       ├── 🖼️ book-*.webp    # Imagens de livros
│       └── 📂 articles/      # Imagens para artigos
└── 📂 Virtual/               # Sistema da Clínica Virtual
    ├── 🏥 virtual.html       # Landing page da clínica
    ├── 🔐 login.html         # Portal de acesso pacientes
    ├── 📝 register.html      # Formulário agendamento
    └── 📂 System/            # Sistema interno
        └── 📊 dashboard.html # Painel do paciente
```

### 🗂️ **Organização por Funcionalidade**
- **🏠 Site Institucional**: `index.html`, `about.html`, `terms.html`
- **🏥 Clínica Virtual**: Pasta `Virtual/` com sistema completo
- **📦 Recursos**: Pasta `assets/` com todos os arquivos estáticos
- **🎨 Design**: Bootstrap 5 + CSS customizado + Tabler Icons

## 🚀 Como Executar o Projeto

### 📋 Pré-requisitos
- **Navegador moderno**: Chrome, Firefox, Edge ou Safari (versões atuais)
- **Servidor local** (recomendado para desenvolvimento)

### ⚡ Instalação e Execução

1. **📥 Clone ou baixe o projeto**
```bash
git clone https://github.com/seu-usuario/nutri.git
cd nutri
```

2. **🌐 Opções de execução**

**Opção A: Servidor Python (Recomendado)**
```powershell
# Windows PowerShell
cd "C:\caminho\para\nutri"
python -m http.server 8000
```

**Opção B: Servidor Node.js**
```powershell
npx http-server -p 8000
```

**Opção C: Servidor PHP**
```powershell
php -S localhost:8000
```

**Opção D: Abertura direta**
- Duplo clique no arquivo `index.html`
- ⚠️ **Nota**: Alguns recursos podem não funcionar sem servidor

3. **🌍 Acesse no navegador**
   - **Com servidor**: `http://localhost:8000`
   - **Arquivo local**: `file:///C:/caminho/para/nutri/index.html`

### 🔧 **Desenvolvimento**
Para desenvolvimento ativo, recomenda-se:
- Usar servidor local para evitar problemas de CORS
- Instalar extensão Live Server no VS Code
- Manter console do navegador aberto para debugging

## 📄 Navegação e Páginas

### 🏠 **Site Principal**
| Página | Arquivo | Descrição |
|--------|---------|-----------|
| **Início** | `index.html` | Landing page com apresentação da nutricionista |
| **Trajetória** | `about.html` | História profissional e especialidades |
| **Termos** | `terms.html` | Políticas de uso e LGPD |

### 🏥 **Sistema Clínica Virtual**
| Página | Arquivo | Função |
|--------|---------|--------|
| **Portal Virtual** | `Virtual/virtual.html` | Apresentação dos serviços online |
| **Login** | `Virtual/login.html` | Acesso para pacientes cadastrados |
| **Agendamento** | `Virtual/register.html` | Formulário primeira consulta |
| **Dashboard** | `Virtual/System/dashboard.html` | Painel de acompanhamento |

### 🔗 **Navegação Corrigida**
✅ **Todos os links internos foram corrigidos e testados:**
- Navegação entre páginas principais funcional
- Links da clínica virtual direcionam corretamente
- Caminhos relativos ajustados por nível de pasta
- Sistema de login direciona para dashboard
- Termos de uso acessível do formulário de agendamento

### 📱 **Links Externos**
- **WhatsApp**: Integração direta via `wa.me`
- **Redes Sociais**: Ícones no rodapé (placeholder)
- **Google Fonts**: Carregamento CDN

## 🎯 Especialidades

### 🧠 Neuro Nutrição
Foco no impacto da alimentação sobre a saúde cerebral e função cognitiva.

### 👶 Nutrição Materno-Infantil
Acompanhamento nutricional para gestantes, lactantes e crianças.

### ⚖️ Emagrecimento Saudável
Programas personalizados para perda de peso sustentável.

### 🌟 Bem-estar Geral
Promoção de energia, vitalidade e qualidade de vida.

## 📱 Contato

### Nutricionista Amanda Tavares
- **WhatsApp**: [+55 79 99999-9999](https://wa.me/5579999999999)
- **CRN**: 00000
- **E-mail**: Disponível através do site
- **Redes Sociais**: Links no rodapé do site

### 🌐 Clínica Virtual
- **Acesso**: Através do site principal
- **Agendamento**: Sistema online integrado
- **Consultas**: Por videochamada
- **Suporte**: Atendimento humanizado

## 🔒 Conformidade e Segurança

### 📋 **LGPD e Privacidade**
O site está em total conformidade com a **Lei Geral de Proteção de Dados (LGPD)**:

- **Coleta Consciente**: Dados coletados apenas para agendamento e comunicação
- **Consentimento Expresso**: Usuário concorda explicitamente com os termos
- **Segurança Adequada**: Medidas técnicas e administrativas de proteção
- **Direitos Garantidos**: Acesso, correção e exclusão de dados disponíveis
- **Finalidade Específica**: Dados usados exclusivamente para prestação de serviços

### 🛡️ **Dados Coletados**
- **Pessoais**: Nome, telefone, CPF, e-mail
- **Clínicos**: Altura, peso, hábitos alimentares, objetivos (após cadastro)
- **Finalidade**: Agendamento de consultas e elaboração de planos nutricionais

### ⚖️ **Termos de Uso**
Página dedicada (`terms.html`) com todas as políticas detalhadas e linguagem acessível.

## 🏆 Diferenciais e Funcionalidades

### ✨ **Características Principais**
- ✅ **Atendimento 100% Humanizado**: Sem bots, contato direto com a profissional
- ✅ **Consultas por Videochamada**: Atendimento ao vivo e personalizado  
- ✅ **Planos Totalmente Individualizados**: Dietas únicas para cada paciente
- ✅ **Interface Moderna e Intuitiva**: Design responsivo e acessível
- ✅ **Agendamento Online Simplificado**: Sistema integrado de marcação
- ✅ **Suporte Contínuo**: Acompanhamento durante todo o processo

### 🎨 **Design e UX**
- **Responsividade Total**: Mobile-first, compatível com todos os dispositivos
- **Animações Suaves**: AOS (Animate On Scroll) para melhor experiência
- **Tipografia Profissional**: Google Fonts (Libre Baskerville + Inter)
- **Ícones Modernos**: Tabler Icons e Bootstrap Icons
- **Paleta Harmoniosa**: Cores que transmitem confiança e bem-estar

### 🚀 **Performance Otimizada**
- **Imagens WebP**: Formato otimizado para carregamento rápido
- **CSS/JS Minificados**: Arquivos comprimidos para melhor performance
- **Carregamento Assíncrono**: Scripts organizados para evitar bloqueios
- **SEO Friendly**: Meta tags e estrutura semântica adequadas

## 📈 Otimizações Técnicas

### 🔧 **Melhorias Implementadas**
- **✅ Links Corrigidos**: Navegação 100% funcional entre todas as páginas
- **✅ Caminhos Relativos**: Estrutura de pastas organizada e links corretos
- **✅ Bootstrap 5**: Framework atualizado e responsivo
- **✅ Validação HTML5**: Formulários com validação nativa
- **✅ Acessibilidade**: Navegação por teclado e screen readers

### 🚀 **Performance**
- **Otimização de Imagens**: WebP para redução de tamanho
- **Minificação**: CSS e JS comprimidos
- **CDN**: Google Fonts carregadas via CDN
- **Lazy Loading**: Carregamento eficiente de recursos

### 📱 **Responsividade**
- **Mobile First**: Design prioriza dispositivos móveis
- **Breakpoints**: Adaptação para tablet e desktop
- **Touch Friendly**: Botões e áreas de toque otimizadas

---

## 🔄 Changelog Recente

### **📅 Junho 2025 - Atualização de Navegação**
- 🔧 **Corrigidos todos os links internos** entre páginas
- 🔧 **Ajustados caminhos relativos** da estrutura de pastas
- 🔧 **Testada navegação completa** do sistema
- 🔧 **Validado funcionamento** da clínica virtual
- 📚 **Atualizada documentação** do README

### **Problemas Resolvidos:**
- ❌ `Virtual/Virtual/register.html` → ✅ `Virtual/register.html`
- ❌ Links quebrados entre páginas → ✅ Navegação fluida
- ❌ Caminhos incorretos dashboard → ✅ Acesso direto funcional
- ❌ Termos inacessíveis → ✅ Link corrigido no formulário

---

## 🛠️ **Para Desenvolvedores**

### 📂 **Estrutura de Desenvolvimento**
```
projeto/
├── 🏠 Páginas principais (raiz)
├── 🎨 Assets organizados por tipo
├── 🏥 Sistema Virtual modular
└── 📱 Design Mobile-first
```

### 🔧 **Tecnologias em Uso**
- **Frontend**: HTML5 + CSS3 + Vanilla JavaScript
- **Framework**: Bootstrap 5.x
- **Ícones**: Tabler Icons + Bootstrap Icons  
- **Fontes**: Google Fonts (Libre Baskerville, Inter)
- **Animações**: AOS (Animate On Scroll)
- **Galeria**: BaguetteBox.js

### 📋 **Checklist de Manutenção**
- [ ] Testar navegação em todos os navegadores
- [ ] Validar responsividade mobile
- [ ] Verificar carregamento de imagens WebP
- [ ] Confirmar funcionamento dos formulários
- [ ] Validar links externos (WhatsApp)

---

**© 2025 Amanda Tavares - Nutricionista CRN-0: 00000**

*✨ Site desenvolvido com foco na melhor experiência para pacientes que buscam orientação nutricional de qualidade e atendimento humanizado.*

---

### 📞 **Suporte Técnico**
Para dúvidas sobre o funcionamento do site ou questões técnicas, utilize os canais de contato disponíveis na plataforma.
