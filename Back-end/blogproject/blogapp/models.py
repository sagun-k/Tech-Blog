from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify

class Category(models.TextChoices):
    World="World"
    Technology="Technology"
    Environment="Environment"
    Business="Business"
    Education="Education"
    Society="Society"
    History="History"
    Sports="Sports"
    Politics="Politics"
    Economics="Economics"
    Travel="Travel"
    Style="Style"
    Health="Health"

class BlogPost(models.Model):
    title = models.CharField(max_length=100)
    slug=models.SlugField()
    category=models.CharField(max_length=50,choices=Category.choices,default=Category.World )
    thumbnail=models.ImageField(upload_to="photos/%Y/%m/%d")
    excerpt=models.CharField(max_length=200)
    month=models.CharField(max_length=3)
    day=models.CharField(max_length=2)
    content=models.TextField()
    created_date=models.DateTimeField(default=datetime.now,blank=True)

    def save(self, *args, **kwargs):
        original_slug=slugify(self.title)
        queryset=BlogPost.objects.all().filter(slug__iexact=original_slug).count()
        count=1
        slug=original_slug

        while(queryset):
            slug=original_slug + '-' + str(count)
            count+=1
            queryset=BlogPost.objects.all().filter(slug__iexact=slug).count()

        self.slug=slug

        super(BlogPost, self).save(*args, **kwargs)

    def __str__(self):
        return self.title
            

