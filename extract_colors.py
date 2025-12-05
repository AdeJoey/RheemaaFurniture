
import os
import sys
from collections import Counter

try:
    from PIL import Image
except ImportError:
    print("Pillow not installed")
    sys.exit(1)

def get_dominant_color(image_path):
    try:
        img = Image.open(image_path)
        img = img.convert("RGB")
        img = img.resize((100, 100))  # Resize for speed
        pixels = list(img.getdata())
        
        # Filter out near-white and near-black
        filtered_pixels = [
            p for p in pixels 
            if not (p[0] > 240 and p[1] > 240 and p[2] > 240) and 
               not (p[0] < 15 and p[1] < 15 and p[2] < 15)
        ]
        
        if not filtered_pixels:
            return None

        counts = Counter(filtered_pixels)
        most_common = counts.most_common(5)
        
        hex_colors = []
        for color, count in most_common:
            hex_colors.append('#{:02x}{:02x}{:02x}'.format(*color))
            
        return hex_colors
    except Exception as e:
        return str(e)

image_dir = r"C:\Users\USER\.gemini\antigravity\brain\ebce1e33-fb0b-4558-b13d-105d7d376756"
files = [f for f in os.listdir(image_dir) if f.endswith(".jpg") or f.endswith(".png")]

print(f"Found {len(files)} images.")

for f in files:
    path = os.path.join(image_dir, f)
    print(f"Analyzing {f}...")
    colors = get_dominant_color(path)
    print(f"Dominant colors: {colors}")
