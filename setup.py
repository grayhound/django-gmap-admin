import os
from setuptools import setup

from gmap_admin import VERSION

REQUIREMENTS = [
    'django',
    'mock',
]
README = os.path.join(os.path.dirname(__file__), 'README.md')
LONG_DESCRIPTION = open(README, 'r').read()
CLASSIFIERS = [
    "Development Status :: 3 - Alpha",
    "Environment :: Web Environment",
    "Framework :: Django",
    "Intended Audience :: Developers",
    "License :: OSI Approved :: BSD License",
    "Operating System :: OS Independent",
    "Programming Language :: Python",
    "Topic :: Software Development",
    "Topic :: Software Development :: Libraries :: Application Frameworks",
]

setup(
    name="django_gmap_admin",
    version=VERSION,
    author="Aaron Madison",
    author_email="timmy@pastylegs.com",
    description="Simple django admin modelfield, formfield and widget combination for choosing locations",
    long_description=LONG_DESCRIPTION,
    url="https://github.com/pastylegs/django_gmap_admin",
    packages=("gmap_admin",),
    include_package_data=True,
    install_requires=REQUIREMENTS,
    classifiers=CLASSIFIERS,
    zip_safe=False,
)
