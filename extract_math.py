import os
from pypdf import PdfReader

sources_dir = r"c:\Users\baxti\OneDrive\Рабочий стол\Math Q&A\sources"
output_file = "extracted_percentages.txt"

files = [
    "Acing the New - SAT Math.pdf",
    "Erica Reading Digital SAT.pdf",
    "[MADS] ERICA Grammar for Digital SAT.pdf",
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
                if text and "percent" in text.lower():
                    out.write(f"\n--- PAGE {i+1} ---\n")
                    out.write(text)
        except Exception as e:
            print(f"Error reading {filename}: {e}")

print(f"Saved to {output_file}")
