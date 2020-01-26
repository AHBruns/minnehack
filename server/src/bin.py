class bin:

    def __init__(self, id, longitude, latitude):
        self.id = id
        self.longitude = longitude
        self.latitude = latitude
        self.total_breaks = 0

    def broken(self):
        self.total_breaks += 1

    def get_total_breaks(self):
        return self.total_breaks