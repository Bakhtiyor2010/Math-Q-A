from pypdf import PdfReader
reader = PdfReader("sources/panda sat math.pdf")
print(f"Num pages: {len(reader.pages)}")
page = reader.pages[20] # Try another page
print(f"Text length: {len(page.extract_text())}")
print(page.extract_text()[:200])
