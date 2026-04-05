import os
from pypdf import PdfReader

sources_dir = r"c:\Users\baxti\OneDrive\Рабочий стол\sat-math\sources"
output_file = "extracted_systems.txt"

files = [
    "Acing the New - SAT Math.pdf",
    "panda sat math.pdf"
]

with open(output_file, "w", encoding="utf-8") as out:
    for filename in files:
        filepath = os.path.join(sources_dir, filename)
        if not os.path.exists(filepath):
            print(f"Skipping {filename} (not found)")
            continue
        
        print(f"Processing {filename}...")
        out.write(f"\n\n{'='*20}\nSOURCE: {filename}\n{'='*20}\n")
        
        try:
            reader = PdfReader(filepath)
            for i, page in enumerate(reader.pages):
                text = page.extract_text()
                if text and ("systems of equations" in text.lower() or "linear systems" in text.lower()):
                    out.write(f"\n--- PAGE {i+1} ---\n")
                    out.write(text)
        except Exception as e:
            print(f"Error reading {filename}: {e}")

print(f"Saved to {output_file}")
