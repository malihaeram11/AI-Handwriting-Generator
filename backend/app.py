from flask import Flask, request, send_file
from flask_cors import CORS
from PIL import Image, ImageDraw, ImageFont
import io

app = Flask(__name__)
CORS(app)  # 👈 THIS FIXES CORS!

# Your existing route here...


app = Flask(__name__)
CORS(app)  # Allow requests from frontend

@app.route('/generate', methods=['POST'])
def generate_handwriting():
    data = request.json
    text = data.get('text', '')

    # Create white image
    img = Image.new('RGB', (800, 200), color='white')
    draw = ImageDraw.Draw(img)

    # Load font
    font = ImageFont.truetype('fonts/handwriting.ttf', 48)

    # Draw text
    draw.text((50, 70), text, font=font, fill='black')

    # Convert to bytes
    img_io = io.BytesIO()
    img.save(img_io, 'PNG')
    img_io.seek(0)

    return send_file(img_io, mimetype='image/png')

if __name__ == '__main__':
    app.run(debug=True)
