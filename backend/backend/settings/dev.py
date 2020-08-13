from .common import *

INSTALLED_APPS += [
    'debug_toolbar'
]


# 맨 처음에 넣어야 하기 때문에 아래와 같이 둠
MIDDLEWARE = [
    "debug_toolbar.middleware.DebugToolbarMiddleware"
] + MIDDLEWARE

INTERNAL_IPS = ["127.0.0.1"]

CORS_ORIGIN_WHITELIST = ["http://localhost:3000"]