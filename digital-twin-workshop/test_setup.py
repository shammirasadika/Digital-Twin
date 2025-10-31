"""Test script to verify all integrations"""
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

print("🔍 Testing Digital Twin Workshop Setup\n")
print("=" * 50)

# Test 1: Environment Variables
print("\n✓ Test 1: Environment Variables")
groq_key = os.getenv("GROQ_API_KEY")
upstash_url = os.getenv("UPSTASH_VECTOR_REST_URL")
upstash_token = os.getenv("UPSTASH_VECTOR_REST_TOKEN")

if groq_key:
    print(f"  ✓ GROQ_API_KEY: {groq_key[:20]}...")
else:
    print("  ✗ GROQ_API_KEY: Not found")

if upstash_url:
    print(f"  ✓ UPSTASH_VECTOR_REST_URL: {upstash_url}")
else:
    print("  ✗ UPSTASH_VECTOR_REST_URL: Not found")

if upstash_token:
    print(f"  ✓ UPSTASH_VECTOR_REST_TOKEN: {upstash_token[:20]}...")
else:
    print("  ✗ UPSTASH_VECTOR_REST_TOKEN: Not found")

# Test 2: Package Imports
print("\n✓ Test 2: Package Imports")
try:
    import groq
    print("  ✓ groq package imported successfully")
except ImportError as e:
    print(f"  ✗ groq import failed: {e}")

try:
    from upstash_vector import Index
    print("  ✓ upstash_vector package imported successfully")
except ImportError as e:
    print(f"  ✗ upstash_vector import failed: {e}")

# Test 3: Groq API Connection
print("\n✓ Test 3: Groq API Connection")
try:
    from groq import Groq
    client = Groq(api_key=groq_key)
    # Simple test - just initialize client
    print("  ✓ Groq client initialized successfully")
except Exception as e:
    print(f"  ✗ Groq connection failed: {e}")

# Test 4: Upstash Vector Connection
print("\n✓ Test 4: Upstash Vector Connection")
try:
    from upstash_vector import Index
    index = Index(url=upstash_url, token=upstash_token)
    # Test with info() method
    info = index.info()
    print(f"  ✓ Upstash Vector connected successfully")
    print(f"  ✓ Vector dimension: {info.dimension}")
    print(f"  ✓ Vector count: {info.vector_count}")
except Exception as e:
    print(f"  ✗ Upstash connection failed: {e}")

print("\n" + "=" * 50)
print("✓ Setup verification complete!")
