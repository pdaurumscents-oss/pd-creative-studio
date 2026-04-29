function generatePrompt() {
  const contentType = document.getElementById("contentType").value;
  const subject = document.getElementById("subject").value.trim() || "premium product";
  const mood = document.getElementById("mood").value;
  const background = document.getElementById("background").value.trim() || "minimal luxury studio background";
  const textOnImage = document.getElementById("textOnImage").value.trim();

  let basePrompt = "";

  if (contentType === "giftset") {
    basePrompt = `A premium gift set diffuser product photo featuring ${subject}, placed in ${background}, ${mood} atmosphere, warm beige and gold tones, elegant packaging, refined luxury composition, soft natural lighting, shallow depth of field, high-end commercial product photography, clean premium aesthetic, realistic, no people`;
  }

  if (contentType === "perfume") {
    basePrompt = `A luxury perfume product photo featuring ${subject}, placed in ${background}, ${mood} mood, elegant reflections, premium glass bottle, soft cinematic lighting, refined beige and champagne color palette, high-end fragrance advertising style, realistic commercial photography, no people`;
  }

  if (contentType === "hotel") {
    basePrompt = `A premium hospitality product scene featuring ${subject}, displayed beautifully in ${background}, ${mood} atmosphere, boutique hotel and spa branding style, warm luxury lighting, elegant decor, welcoming first impression, refined commercial photography, realistic, no people`;
  }

  if (contentType === "etsy") {
    basePrompt = `Minimal printable wall art design featuring ${subject}, ${mood} style, warm beige neutral color palette, refined composition, soft paper texture, Japandi Scandinavian quiet luxury aesthetic, elegant home decor artwork, high resolution, no mockup`;
  }

  if (contentType === "mockup") {
    basePrompt = `A full-page premium mockup scene featuring ${subject}, placed in ${background}, ${mood} interior, warm neutral tones, elegant home decor styling, realistic lighting, clean editorial composition, high-end lifestyle photography`;
  }

  if (textOnImage) {
    basePrompt += `, include elegant text on image: "${textOnImage}"`;
  } else {
    basePrompt += `, no text, no logo`;
  }

  basePrompt += `, vertical composition, social media ready, high quality, premium brand style`;

  document.getElementById("resultPrompt").value = basePrompt;
}

function copyPrompt() {
  const result = document.getElementById("resultPrompt");

  if (!result.value.trim()) {
    alert("ยังไม่มี Prompt ให้คัดลอกครับ");
    return;
  }

  result.select();
  result.setSelectionRange(0, 99999);
  document.execCommand("copy");

  alert("คัดลอก Prompt แล้วครับ");
}

function clearForm() {
  document.getElementById("subject").value = "";
  document.getElementById("background").value = "";
  document.getElementById("textOnImage").value = "";
  document.getElementById("resultPrompt").value = "";
}
