

json.array! @albums do |album|
  json.id album.id
  json.title album.title
  json.summary album.summary
  json.audio album.enclosure_url
  json.itunes_author album.itunes_author
end
