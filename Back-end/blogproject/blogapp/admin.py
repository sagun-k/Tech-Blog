from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import BlogPost

class BlogPostAdmin(SummernoteModelAdmin):
    exclude = ('slug',)
    list_display=('id','title','category','created_date')
    list_display_links = ('id','title')
    search_fields =('title','category')
    list_per_page =20
    summernote_fields = ('content',)

admin.site.register(BlogPost, BlogPostAdmin)
