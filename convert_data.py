import json
import os

input_path = '../darija_nkt.txt'
output_path = 'jokes.json'

try:
    with open(input_path, 'r', encoding='utf-8') as f:
        # Read lines and filter out empty ones
        lines = [line.strip() for line in f if line.strip()]

    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(lines, f, ensure_ascii=False, indent=2)

    print(f"Successfully converted {len(lines)} jokes to {output_path}")

except Exception as e:
    print(f"Error: {e}")
