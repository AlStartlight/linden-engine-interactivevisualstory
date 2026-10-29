type StoryChoice = {
  label: string
  sub: string
  next: string
}

type StoryEnding = {
  id: string
  title: string
  desc: string
}

type StoryNode = {
  scene?: string
  chapter?: string
  speaker?: string
  text: string
  expr?: string
  avatar?: boolean
  dim?: boolean
  choices?: StoryChoice[]
  next?: string
  end?: StoryEnding
}

const STORY: Record<string, StoryNode> = {
  intro1: {
    scene: 'forest',
    chapter: 'Bab I · Hutan Kabut',
    speaker: 'Narator',
    avatar: false,
    text: 'Senja merayap di atas Hutan Kabut. Di antara batang-batang pinus, kabut bergerak pelan — seperti napas makhluk yang sedang tidur.',
    next: 'intro2',
  },
  intro2: {
    speaker: 'Narator',
    avatar: false,
    text: 'Kau berhenti di tepi jalan setapak. Di sanalah Alya menunggu, dengan lentera yang nyaris padam di tangannya.',
    next: 'alya1',
  },
  alya1: {
    speaker: 'Alya',
    expr: 'neutral',
    text: 'Kau datang juga. Aku sudah berdiri di sini cukup lama sampai kakiku mati rasa.',
    next: 'alya2',
  },
  alya2: {
    speaker: 'Alya',
    expr: 'worried',
    text: 'Dengar itu? Bukan angin. Ada sesuatu yang berjalan di antara pepohonan.',
    next: 'alya3',
  },
  alya3: {
    speaker: 'Alya',
    expr: 'worried',
    text: 'Dan lihat... cahaya biru di utara. Bersamaan dengan bisikan dari arah selatan. Aku tidak tahu mana yang harus kita percaya.',
    next: 'choice1',
  },
  choice1: {
    speaker: 'Alya',
    expr: 'worried',
    text: 'Kita hanya punya satu malam, dan satu arah. Kau yang memutuskan.',
    choices: [
      { label: 'Ikuti cahaya biru', sub: 'Terang — tapi belum tentu aman', next: 'light1' },
      { label: 'Ikuti suara bisikan', sub: 'Gelap — tapi seolah memanggil namamu', next: 'whisper1' },
    ],
  },

  /* ---------------- LIGHT PATH ---------------- */
  light1: {
    scene: 'glow',
    chapter: 'Bab II · Cahaya di Celah Pohon',
    speaker: 'Narator',
    avatar: false,
    text: 'Kau memilih cahaya. Semak-semak terbuka seperti tirai, dan biru itu ternyata hidup — berdenyut pelan, seperti jantung.',
    next: 'light2',
  },
  light2: {
    speaker: 'Alya',
    expr: 'happy',
    text: 'Kau benar. Ini bukan api. Ini sesuatu yang... menunggu.',
    next: 'light3',
  },
  light3: {
    speaker: 'Suara Misterius',
    avatar: true,
    dim: true,
    expr: 'neutral',
    text: 'Kau memilih untuk melihat. Kebanyakan orang memilih untuk mendengar — lalu menyesal seumur hidup.',
    next: 'light4',
  },
  light4: {
    speaker: 'Alya',
    expr: 'worried',
    text: 'Suara itu tahu namaku. Kau mendengarnya juga, kan? Katakan kau mendengarnya.',
    next: 'choiceLight',
  },
  choiceLight: {
    speaker: 'Alya',
    expr: 'worried',
    text: 'Cahaya itu menunggu. Dan aku menunggumu memutuskan.',
    choices: [
      { label: 'Menggenggam tangan Alya dan melangkah bersama', sub: 'Kau tidak harus menghadapinya sendiri', next: 'lightGood1' },
      { label: 'Menyentuh cahaya itu sendiri', sub: 'Rasa ingin tahu mengalahkan rasa takut', next: 'lightAlt1' },
    ],
  },
  lightGood1: {
    scene: 'peak',
    chapter: 'Bab III · Fajar',
    speaker: 'Narator',
    avatar: false,
    text: 'Kau menggenggam tangan Alya. Cahaya itu menyusut, berubah menjadi sebutir bintang kecil di telapak kalian berdua.',
    next: 'lightGood2',
  },
  lightGood2: {
    speaker: 'Alya',
    expr: 'happy',
    text: 'Kalau cahaya ini harus dibagi dua, aku tidak keberatan. Asal kau tidak menghilang di tengah jalan.',
    next: 'lightGood3',
  },
  lightGood3: {
    speaker: 'Narator',
    avatar: false,
    text: 'Fajar menemukan kalian di puncak bukit, tertawa pada sesuatu yang tidak bisa dijelaskan kepada siapa pun.',
    end: {
      id: 'light-good',
      title: 'Cahaya yang Dibagi',
      desc: 'Kau memilih berbagi terang, bukan memilikinya. Di dunia yang selalu menuntut jawaban, kau dan Alya pulang dengan sebuah pertanyaan yang indah.',
    },
  },
  lightAlt1: {
    speaker: 'Narator',
    avatar: false,
    text: 'Kau mengulurkan tangan. Cahaya itu menerimamu — dan untuk sesaat, kau melihat semua jalan yang tidak pernah kau pilih.',
    next: 'lightAlt2',
  },
  lightAlt2: {
    speaker: 'Narator',
    avatar: false,
    text: 'Ketika kau membuka mata, jalan setapak sudah lenyap. Yang tersisa hanya kabut, dan Alya yang memanggil namamu dari kejauhan.',
    next: 'lightAlt3',
  },
  lightAlt3: {
    speaker: 'Alya',
    expr: 'sad',
    text: 'Kau masih di sini? Kau terlihat... jauh. Seperti bayangan yang berdiri tepat di tempatku.',
    next: 'lightAlt4',
  },
  lightAlt4: {
    scene: 'void',
    speaker: 'Narator',
    avatar: false,
    text: 'Sejak malam itu, kau bisa melihat cahaya di mana-mana. Tapi tidak ada satu pun yang bisa kau sentuh.',
    end: {
      id: 'light-alt',
      title: 'Penjaga Jalan Sunyi',
      desc: 'Kau memilih tahu segalanya, dan kehilangan satu hal: cara pulang. Beberapa pengetahuan hanya indah dari kejauhan.',
    },
  },

  /* ---------------- WHISPER PATH ---------------- */
  whisper1: {
    scene: 'temple',
    chapter: 'Bab II · Bisikan di Batu Tua',
    speaker: 'Narator',
    avatar: false,
    text: 'Kau memilih bisikan. Jalan setapak menurun, menembus akar dan batu, lalu berakhir di sebuah kuil yang tidak ada di peta mana pun.',
    next: 'whisper2',
  },
  whisper2: {
    speaker: 'Narator',
    avatar: false,
    text: 'Di tengah ruangan, seorang penjaga berdiri tanpa bayangan. Batu-batu di dinding berdenyut seperti urat.',
    next: 'whisper3',
  },
  whisper3: {
    speaker: 'Penjaga Kuil',
    avatar: true,
    dim: true,
    expr: 'neutral',
    text: 'Langkahmu berat, tapi kau sampai juga. Bisikan itu bukan untukmu, anak muda. Kau hanya kebetulan berdiri di jalurnya.',
    next: 'whisper4',
  },
  whisper4: {
    speaker: 'Alya',
    expr: 'worried',
    text: 'Aku tidak suka tempat ini. Batu-batu itu... menghafal wajah kita.',
    next: 'choiceWhisper',
  },
  choiceWhisper: {
    speaker: 'Penjaga Kuil',
    avatar: true,
    dim: true,
    expr: 'thinking',
    text: 'Kekuatan selalu punya harga. Dan malam ini, harganya sedang dipajang di depanmu.',
    choices: [
      { label: 'Menolak tawaran Penjaga', sub: 'Tidak semua pintu perlu dibuka', next: 'templeGood1' },
      { label: 'Menerima kekuatan dari bisikan', sub: 'Kekuatan selalu punya harga', next: 'templeDark1' },
    ],
  },
  templeGood1: {
    speaker: 'Narator',
    avatar: false,
    text: 'Kau mundur satu langkah. Seluruh kuil bergetar — lalu diam, seperti menghormati penolakanmu.',
    next: 'templeGood2',
  },
  templeGood2: {
    speaker: 'Penjaga Kuil',
    avatar: true,
    dim: true,
    expr: 'neutral',
    text: 'Bijak. Bisikan paling berbahaya justru ketika ia terdengar seperti suaramu sendiri. Pergilah sebelum ia belajar menirumu.',
    next: 'templeGood3',
  },
  templeGood3: {
    scene: 'city',
    chapter: 'Bab III · Kota yang Menunggu',
    speaker: 'Narator',
    avatar: false,
    text: 'Kalian kembali ke kota saat lampu-lampu jalan baru menyala. Alya membeli dua cangkir teh hangat dan menyerahkan satu padamu tanpa bertanya.',
    next: 'templeGood4',
  },
  templeGood4: {
    speaker: 'Alya',
    expr: 'happy',
    text: 'Kau tahu? Aku lebih takut pada orang yang menerima tawaran itu tanpa berpikir. Ayo pulang. Aku lapar.',
    end: {
      id: 'temple-good',
      title: 'Jalan Pulang',
      desc: 'Keberanian bukan hanya tentang melangkah maju. Kadang, itu tentang berbalik arah — dan tetap pulang dengan tangan yang utuh.',
    },
  },
  templeDark1: {
    scene: 'void',
    speaker: 'Narator',
    avatar: false,
    text: 'Kau menerima. Bisikan itu merambat dari telinga ke tulang, dan kuil runtuh dalam keheningan yang tidak meninggalkan debu.',
    next: 'templeDark2',
  },
  templeDark2: {
    speaker: 'Alya',
    expr: 'sad',
    text: 'Kau... masih mengenaliku? Karena aku tidak yakin aku masih mengenalmu.',
    next: 'templeDark3',
  },
  templeDark3: {
    speaker: 'Narator',
    avatar: false,
    text: 'Kota tidak berubah. Tapi setiap cermin kini menampilkan seseorang yang tersenyum sedikit lebih dulu darimu.',
    end: {
      id: 'temple-dark',
      title: 'Suara yang Tinggal',
      desc: 'Kau menukar namamu dengan kekuatan. Sesuatu harus tinggal di kuil itu — dan malam ini, ia memakai wajahmu.',
    },
  },
}

const ENDING_TOTAL = 4

export default class StoryDirector {
  charsPerSecond = 46

  private ctx: any = null
  private root: any = null
  private avatar: any = null
  private speakerEl: any = null
  private textEl: any = null
  private hintEl: any = null
  private chapterEl: any = null
  private choicesEl: any = null
  private choiceA: any = null
  private choiceB: any = null
  private choiceALabel: any = null
  private choiceASub: any = null
  private choiceBLabel: any = null
  private choiceBSub: any = null
  private titleEl: any = null
  private endEl: any = null
  private endTitleEl: any = null
  private endDescEl: any = null
  private endCountEl: any = null

  private node: StoryNode | null = null
  private full = ''
  private shownChars = 0
  private reveal = 0
  private typing = false
  private waitingChoice = false
  private pending: StoryChoice[] = []
  private started = false
  private ended = false
  private endings: Record<string, boolean> = {}
  private prevEnter = false
  private prevOne = false
  private prevTwo = false

  onInit(ctx: any) {
    this.ctx = ctx

    this.root = this.el('vn-root')
    this.avatar = this.el('vn-avatar')
    this.speakerEl = this.el('vn-speaker')
    this.textEl = this.el('vn-text')
    this.hintEl = this.el('vn-hint')
    this.chapterEl = this.el('vn-chapter')
    this.choicesEl = this.el('vn-choices')
    this.choiceA = this.el('vn-choice-a')
    this.choiceB = this.el('vn-choice-b')
    this.choiceALabel = this.el('vn-choice-a-label')
    this.choiceASub = this.el('vn-choice-a-sub')
    this.choiceBLabel = this.el('vn-choice-b-label')
    this.choiceBSub = this.el('vn-choice-b-sub')
    this.titleEl = this.el('vn-title')
    this.endEl = this.el('vn-end')
    this.endTitleEl = this.el('vn-end-title')
    this.endDescEl = this.el('vn-end-desc')
    this.endCountEl = this.el('vn-end-count')

    const click = this.el('vn-advance')
    if (click) click.addEventListener('click', () => this.advance())
    const start = this.el('vn-start')
    if (start) start.addEventListener('click', () => this.begin())
    if (this.choiceA) this.choiceA.addEventListener('click', () => this.choose(0))
    if (this.choiceB) this.choiceB.addEventListener('click', () => this.choose(1))
    const reset = this.el('vn-reset')
    if (reset) reset.addEventListener('click', () => this.restart())
    const again = this.el('vn-end-restart')
    if (again) again.addEventListener('click', () => this.restart())

    this.setChapter('Bab I · Hutan Kabut')
    this.setSpeaker('Narator')
  }

  /* -------------------- loop -------------------- */

  onUpdate(dt: number) {
    if (!this.started) {
      if (this.actionPressed('Jump') || this.actionPressed('Interact') || this.keyPressed('Enter')) {
        this.begin()
      }
      return
    }
    if (this.ended) return

    if (this.keyEdge('Enter')) this.advance()
    if (this.keyEdge('Digit1') || this.keyEdge('Numpad1')) this.choose(0)
    if (this.keyEdge('Digit2') || this.keyEdge('Numpad2')) this.choose(1)
    if (this.actionPressed('Jump') || this.actionPressed('Interact')) this.advance()

    if (!this.typing) return
    this.reveal += dt * Math.max(8, this.charsPerSecond)
    const count = Math.min(this.full.length, Math.floor(this.reveal))
    if (count !== this.shownChars) {
      this.shownChars = count
      this.write(this.full.slice(0, count))
    }
    if (count >= this.full.length) this.finishTyping()
  }

  /* -------------------- flow -------------------- */

  begin() {
    if (this.started) return
    this.started = true
    if (this.root) this.root.classList.add('is-started')
    if (this.titleEl) this.titleEl.classList.add('is-hidden')
    this.goto('intro1')
  }

  restart() {
    this.ended = false
    if (this.endEl) this.endEl.classList.add('is-hidden')
    if (this.root) this.root.classList.add('is-started')
    if (this.root) this.root.classList.remove('is-ended')
    if (this.titleEl) this.titleEl.classList.add('is-hidden')
    this.started = true
    this.goto('intro1')
  }

  private goto(id: string) {
    const node = STORY[id]
    if (!node) {
      if (this.ctx && this.ctx.log) this.ctx.log('Story node not found: ' + id)
      return
    }

    this.node = node
    if (node.scene) this.applyScene(node.scene)
    if (node.chapter) this.setChapter(node.chapter)
    this.setSpeaker(node.speaker || 'Narator')
    this.setAvatar(node)
    this.hideChoices()

    this.full = node.text
    this.reveal = 0
    this.shownChars = 0
    this.typing = true
    this.write('')
    if (this.textEl && this.textEl.classList) this.textEl.classList.add('typing')
    if (this.avatar && this.avatar.classList) this.avatar.classList.add('talking')
    this.setHint(false)
  }

  private advance() {
    if (!this.started || this.ended) return
    if (this.typing) {
      this.finishTyping()
      return
    }
    if (this.waitingChoice) return
    const node = this.node
    if (!node) return
    if (node.end) {
      this.showEnding(node.end)
      return
    }
    if (node.next) this.goto(node.next)
  }

  private choose(index: number) {
    if (!this.started || this.ended) return
    if (!this.waitingChoice) return
    const choice = this.pending[index]
    if (!choice) return
    this.hideChoices()
    this.goto(choice.next)
  }

  private finishTyping() {
    if (!this.typing) return
    this.typing = false
    this.write(this.full)
    if (this.textEl && this.textEl.classList) this.textEl.classList.remove('typing')
    if (this.avatar && this.avatar.classList) this.avatar.classList.remove('talking')

    const node = this.node
    if (node && node.choices && node.choices.length > 0) {
      this.showChoices(node.choices)
    } else {
      this.setHint(true)
    }
  }

  private showChoices(list: StoryChoice[]) {
    this.pending = list
    this.waitingChoice = true
    this.setHint(false)

    if (this.choiceALabel) this.choiceALabel.textContent = list[0] ? list[0].label : ''
    if (this.choiceASub) this.choiceASub.textContent = list[0] ? list[0].sub : ''
    if (this.choiceBLabel) this.choiceBLabel.textContent = list[1] ? list[1].label : ''
    if (this.choiceBSub) this.choiceBSub.textContent = list[1] ? list[1].sub : ''
    if (this.choiceA) this.choiceA.classList.remove('is-hidden')
    if (this.choiceB) {
      if (list[1]) this.choiceB.classList.remove('is-hidden')
      else this.choiceB.classList.add('is-hidden')
    }
    if (this.choicesEl) this.choicesEl.classList.remove('is-hidden')
  }

  private hideChoices() {
    this.waitingChoice = false
    this.pending = []
    if (this.choicesEl) this.choicesEl.classList.add('is-hidden')
  }

  private showEnding(info: StoryEnding) {
    this.ended = true
    this.hideChoices()
    this.setHint(false)
    this.endings[info.id] = true

    if (this.endTitleEl) this.endTitleEl.textContent = info.title
    if (this.endDescEl) this.endDescEl.textContent = info.desc
    let found = 0
    for (const key in this.endings) found++
    if (this.endCountEl) this.endCountEl.textContent = 'Akhir ditemukan: ' + found + ' / ' + ENDING_TOTAL

    if (this.root) this.root.classList.add('is-ended')
    if (this.endEl) this.endEl.classList.remove('is-hidden')
  }

  /* -------------------- presentation -------------------- */

  private applyScene(scene: string) {
    if (!this.root || !this.root.dataset) return
    if (this.root.dataset.scene === scene) return
    this.root.dataset.scene = scene
    this.flash()
  }

  private flash() {
    const el = this.el('vn-flash')
    if (!el || !el.classList) return
    el.classList.remove('fire')
    const anyEl: any = el
    if (typeof anyEl.offsetWidth === 'number') { void anyEl.offsetWidth }
    el.classList.add('fire')
  }

  private setChapter(title: string) {
    if (this.chapterEl) this.chapterEl.textContent = title
  }

  private setSpeaker(name: string) {
    const narrator = !name || name === 'Narator'
    if (this.speakerEl) {
      this.speakerEl.textContent = narrator ? 'Narator' : name
      if (this.speakerEl.classList) {
        if (narrator) this.speakerEl.classList.add('is-narrator')
        else this.speakerEl.classList.remove('is-narrator')
      }
    }
    if (this.textEl && this.textEl.classList) {
      if (narrator) this.textEl.classList.add('is-narrator')
      else this.textEl.classList.remove('is-narrator')
    }
  }

  private setAvatar(node: StoryNode) {
    if (!this.avatar || !this.avatar.classList) return
    let cls = 'vn-avatar'
    if (node.avatar !== false) cls += ' show'
    if (node.dim) cls += ' dim'
    cls += ' expr-' + (node.expr || 'neutral')
    this.avatar.className = cls
  }

  private write(text: string) {
    if (this.textEl) this.textEl.textContent = text
  }

  private setHint(visible: boolean) {
    if (!this.hintEl) return
    this.hintEl.style.display = visible ? 'flex' : 'none'
  }

  /* -------------------- helpers -------------------- */

  private el(id: string): any {
    const selector = '#' + id
    try {
      if (this.ctx && this.ctx.ui && typeof this.ctx.ui.query === 'function') {
        const found = this.ctx.ui.query(selector)
        if (found) return found
      }
    } catch (err) {}
    try {
      const doc: any = (globalThis as any).document
      if (doc) return doc.querySelector(selector)
    } catch (err) {}
    return null
  }

  private actionPressed(name: string): boolean {
    try {
      return !!(this.ctx && this.ctx.input && this.ctx.input.isActionJustPressed && this.ctx.input.isActionJustPressed(name))
    } catch (err) {
      return false
    }
  }

  private keyPressed(name: string): boolean {
    try {
      return !!(this.ctx && this.ctx.input && this.ctx.input.isKeyDown && this.ctx.input.isKeyDown(name))
    } catch (err) {
      return false
    }
  }

  private keyEdge(name: string): boolean {
    const down = this.keyPressed(name)
    if (name === 'Enter') {
      const edge = down && !this.prevEnter
      this.prevEnter = down
      return edge
    }
    return down
  }
}
