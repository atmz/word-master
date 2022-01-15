const answers = [
  "ΑΒΑΘΗ",
  "ΑΓΑΘΑ",
  "ΑΓΑΘΗ",
  "ΑΓΑΘΟ",
  "ΑΓΑΜΗ",
  "ΑΓΑΠΑ",
  "ΑΓΑΠΗ",
  "ΑΓΑΠΩ",
  "ΑΓΕΛΗ",
  "ΑΓΙΑΣ",
  "ΑΓΙΕΣ",
  "ΑΓΙΟΙ",
  "ΑΓΙΟΝ",
  "ΑΓΙΟΣ",
  "ΑΓΙΟΥ",
  "ΑΓΙΩΝ",
  "ΑΓΝΗΣ",
  "ΑΓΟΡΑ",
  "ΑΓΟΡΙ",
  "ΑΓΡΙΑ",
  "ΑΓΡΙΟ",
  "ΑΓΡΟΣ",
  "ΑΓΧΟΣ",
  "ΑΓΩΓΗ",
  "ΑΓΩΓΟ",
  "ΑΓΩΝΑ",
  "ΑΔΕΙΑ",
  "ΑΔΕΙΟ",
  "ΑΔΕΝΑ",
  "ΑΔΙΚΑ",
  "ΑΔΙΚΗ",
  "ΑΔΙΚΟ",
  "ΑΕΡΑΣ",
  "ΑΕΡΙΑ",
  "ΑΕΡΙΟ",
  "ΑΕΡΟΣ",
  "ΑΕΤΟΙ",
  "ΑΕΤΟΣ",
  "ΑΕΤΟΥ",
  "ΑΖΩΤΟ",
  "ΑΘΕΛΑ",
  "ΑΘΕΟΙ",
  "ΑΘΕΟΣ",
  "ΑΘΛΙΑ",
  "ΑΘΛΟΙ",
  "ΑΘΛΟΣ",
  "ΑΘΩΟΣ",
  "ΑΘΩΩΝ",
  "ΑΙΓΕΣ",
  "ΑΙΓΛΗ",
  "ΑΙΝΟΣ",
  "ΑΙΝΟΥ",
  "ΑΙΤΙΑ",
  "ΑΙΤΙΟ",
  "ΑΙΧΜΗ",
  "ΑΙΩΝΑ",
  "ΑΚΜΕΣ",
  "ΑΚΜΗΣ",
  "ΑΚΜΩΝ",
  "ΑΚΟΗΣ",
  "ΑΚΟΜΑ",
  "ΑΚΟΜΗ",
  "ΑΚΟΥΩ",
  "ΑΚΡΑΣ",
  "ΑΚΡΕΣ",
  "ΑΚΡΟΥ",
  "ΑΚΡΩΝ",
  "ΑΚΡΩΣ",
  "ΑΚΤΕΣ",
  "ΑΚΤΗΣ",
  "ΑΚΤΩΝ",
  "ΑΚΥΡΑ",
  "ΑΚΥΡΗ",
  "ΑΚΥΡΟ",
  "ΑΛΑΤΑ",
  "ΑΛΑΤΙ",
  "ΑΛΓΟΣ",
  "ΑΛΗΘΗ",
  "ΑΛΙΚΗ",
  "ΑΛΚΗΣ",
  "ΑΛΛΕΣ",
  "ΑΛΛΗΣ",
  "ΑΛΛΟΙ",
  "ΑΛΛΟΝ",
  "ΑΛΛΟΣ",
  "ΑΛΛΟΥ",
  "ΑΛΛΩΝ",
  "ΑΛΛΩΣ",
  "ΑΛΟΓΑ",
  "ΑΛΟΓΟ",
  "ΑΛΣΟΣ",
  "ΑΛΤΕΣ",
  "ΑΛΥΚΗ",
  "ΑΛΩΣΗ",
  "ΑΜΑΞΑ",
  "ΑΜΑΞΙ",
  "ΑΜΕΣΑ",
  "ΑΜΕΣΗ",
  "ΑΜΕΣΟ",
  "ΑΜΜΟΣ",
  "ΑΜΜΟΥ",
  "ΑΜΝΩΝ",
  "ΑΜΟΥΡ",
  "ΑΜΠΕΡ",
  "ΑΜΥΛΟ",
  "ΑΜΥΝΑ",
  "ΑΜΦΙΑ",
  "ΑΝΑΣΑ",
  "ΑΝΔΡΑ",
  "ΑΝΔΡΟ",
  "ΑΝΕΜΗ",
  "ΑΝΕΜΟ",
  "ΑΝΕΣΗ",
  "ΑΝΕΤΑ",
  "ΑΝΕΤΗ",
  "ΑΝΗΚΕ",
  "ΑΝΘΟΣ",
  "ΑΝΙΟΝ",
  "ΑΝΙΣΗ",
  "ΑΝΟΔΟ",
  "ΑΝΟΙΑ",
  "ΑΝΟΧΗ",
  "ΑΝΤΙΟ",
  "ΑΝΤΡΑ",
  "ΑΝΤΡΟ",
  "ΑΝΩΣΗ",
  "ΑΞΙΑΣ",
  "ΑΞΙΕΣ",
  "ΑΞΙΖΕ",
  "ΑΞΙΟΝ",
  "ΑΞΙΟΣ",
  "ΑΞΙΟΥ",
  "ΑΞΙΩΝ",
  "ΑΞΟΝΑ",
  "ΑΠΑΛΟ",
  "ΑΠΑΝΩ",
  "ΑΠΑΤΗ",
  "ΑΠΛΕΣ",
  "ΑΠΛΗΣ",
  "ΑΠΛΟΙ",
  "ΑΠΛΟΣ",
  "ΑΠΛΟΥ",
  "ΑΠΛΩΝ",
  "ΑΠΛΩΣ",
  "ΑΠΟΧΗ",
  "ΑΠΟΨΕ",
  "ΑΠΟΨΗ",
  "ΑΡΑΒΑ",
  "ΑΡΑΓΕ",
  "ΑΡΑΙΑ",
  "ΑΡΑΙΟ",
  "ΑΡΓΕΣ",
  "ΑΡΓΙΑ",
  "ΑΡΓΚΟ",
  "ΑΡΓΟΣ",
  "ΑΡΓΟΥ",
  "ΑΡΕΙΟ",
  "ΑΡΕΝΑ",
  "ΑΡΕΣΕ",
  "ΑΡΕΤΗ",
  "ΑΡΘΡΑ",
  "ΑΡΘΡΟ",
  "ΑΡΙΑΣ",
  "ΑΡΙΕΣ",
  "ΑΡΙΩΝ",
  "ΑΡΚΕΙ",
  "ΑΡΚΤΟ",
  "ΑΡΜΟΣ",
  "ΑΡΣΗΣ",
  "ΑΡΤΙΑ",
  "ΑΡΧΑΣ",
  "ΑΡΧΕΣ",
  "ΑΡΧΗΝ",
  "ΑΡΧΗΣ",
  "ΑΡΧΩΝ",
  "ΑΡΩΓΗ",
  "ΑΡΩΜΑ",
  "ΑΣΑΦΗ",
  "ΑΣΗΜΙ",
  "ΑΣΘΜΑ",
  "ΑΣΙΣΤ",
  "ΑΣΚΕΙ",
  "ΑΣΠΙΣ",
  "ΑΣΠΡΑ",
  "ΑΣΠΡΗ",
  "ΑΣΠΡΟ",
  "ΑΣΣΟΣ",
  "ΑΣΣΟΥ",
  "ΑΣΤΗΡ",
  "ΑΣΤΡΑ",
  "ΑΣΤΡΟ",
  "ΑΣΥΛΟ",
  "ΑΤΑΚΑ",
  "ΑΤΕΛΗ",
  "ΑΤΜΟΣ",
  "ΑΤΜΟΥ",
  "ΑΤΜΩΝ",
  "ΑΤΟΜΑ",
  "ΑΤΟΜΟ",
  "ΑΤΥΠΑ",
  "ΑΤΥΠΗ",
  "ΑΤΥΠΟ",
  "ΑΤΥΧΗ",
  "ΑΥΓΗΣ",
  "ΑΥΓΟΥ",
  "ΑΥΓΩΝ",
  "ΑΥΛΕΣ",
  "ΑΥΛΗΣ",
  "ΑΥΛΟΣ",
  "ΑΥΛΩΝ",
  "ΑΥΡΙΟ",
  "ΑΥΤΕΣ",
  "ΑΥΤΗΝ",
  "ΑΥΤΗΣ",
  "ΑΥΤΙΑ",
  "ΑΥΤΟΙ",
  "ΑΥΤΟΝ",
  "ΑΥΤΟΣ",
  "ΑΥΤΟΥ",
  "ΑΥΤΩΝ",
  "ΑΦΗΝΕ",
  "ΑΦΗΝΩ",
  "ΑΦΗΣΑ",
  "ΑΦΗΣΕ",
  "ΑΦΗΣΩ",
  "ΑΦΙΞΗ",
  "ΑΦΙΣΑ",
  "ΑΦΟΡΑ",
  "ΑΧΝΑΣ",
  "ΑΨΙΔΑ",
  "ΒΑΓΙΑ",
  "ΒΑΔΗΝ",
  "ΒΑΖΕΙ",
  "ΒΑΘΙΑ",
  "ΒΑΘΜΟ",
  "ΒΑΘΟΣ",
  "ΒΑΘΡΑ",
  "ΒΑΘΡΟ",
  "ΒΑΘΥΣ",
  "ΒΑΛΕΙ",
  "ΒΑΛΤΕ",
  "ΒΑΛΤΟ",
  "ΒΑΡΔΑ",
  "ΒΑΡΕΑ",
  "ΒΑΡΙΑ",
  "ΒΑΡΙΟ",
  "ΒΑΡΚΑ",
  "ΒΑΡΟΣ",
  "ΒΑΡΥΣ",
  "ΒΑΡΩΝ",
  "ΒΑΣΕΙ",
  "ΒΑΣΗΣ",
  "ΒΑΤΟΣ",
  "ΒΑΦΕΣ",
  "ΒΑΦΗΣ",
  "ΒΓΗΚΕ",
  "ΒΓΟΥΝ",
  "ΒΕΛΟΣ",
  "ΒΕΛΟΥ",
  "ΒΕΡΓΑ",
  "ΒΗΧΑΣ",
  "ΒΙΑΙΑ",
  "ΒΙΑΙΗ",
  "ΒΙΑΙΟ",
  "ΒΙΒΛΟ",
  "ΒΙΓΛΑ",
  "ΒΙΚΟΣ",
  "ΒΙΛΑΣ",
  "ΒΙΛΕΣ",
  "ΒΙΟΛΑ",
  "ΒΙΟΛΙ",
  "ΒΙΤΡΟ",
  "ΒΙΩΣΕ",
  "ΒΛΑΒΗ",
  "ΒΛΑΧΟ",
  "ΒΛΕΠΕ",
  "ΒΛΕΠΩ",
  "ΒΛΗΜΑ",
  "ΒΟΔΙΑ",
  "ΒΟΗΘΑ",
  "ΒΟΗΘΟ",
  "ΒΟΛΕΙ",
  "ΒΟΛΕΣ",
  "ΒΟΛΗΣ",
  "ΒΟΛΟΣ",
  "ΒΟΛΟΥ",
  "ΒΟΛΤΑ",
  "ΒΟΛΩΝ",
  "ΒΟΜΒΑ",
  "ΒΟΡΑΣ",
  "ΒΟΡΙΟ",
  "ΒΟΡΡΑ",
  "ΒΟΤΚΑ",
  "ΒΟΥΔΑ",
  "ΒΟΥΛΑ",
  "ΒΟΥΛΗ",
  "ΒΟΥΝΑ",
  "ΒΟΥΝΟ",
  "ΒΡΑΔΥ",
  "ΒΡΑΧΟ",
  "ΒΡΑΧΥ",
  "ΒΡΕΙΣ",
  "ΒΡΕΦΗ",
  "ΒΡΗΚΑ",
  "ΒΡΗΚΕ",
  "ΒΡΟΥΝ",
  "ΒΡΟΧΗ",
  "ΒΡΟΧΟ",
  "ΒΡΥΣΗ",
  "ΒΡΩΜΗ",
  "ΒΥΘΟΣ",
  "ΒΥΘΟΥ",
  "ΒΩΒΟΥ",
  "ΒΩΒΩΝ",
  "ΒΩΜΟΣ",
  "ΒΩΜΟΥ",
  "ΓΑΖΑΣ",
  "ΓΑΙΑΣ",
  "ΓΑΙΕΣ",
  "ΓΑΙΩΝ",
  "ΓΑΜΜΑ",
  "ΓΑΜΟΙ",
  "ΓΑΜΟΣ",
  "ΓΑΜΟΥ",
  "ΓΑΜΩΝ",
  "ΓΑΝΤΙ",
  "ΓΑΤΑΣ",
  "ΓΑΤΕΣ",
  "ΓΑΤΟΣ",
  "ΓΕΛΙΑ",
  "ΓΕΛΙΟ",
  "ΓΕΝΕΑ",
  "ΓΕΝΕΙ",
  "ΓΕΝΙΑ",
  "ΓΕΝΝΑ",
  "ΓΕΝΟΣ",
  "ΓΕΝΩΝ",
  "ΓΕΡΑΣ",
  "ΓΕΡΜΑ",
  "ΓΕΡΟΣ",
  "ΓΕΡΩΝ",
  "ΓΕΥΜΑ",
  "ΓΕΥΣΗ",
  "ΓΗΙΝΑ",
  "ΓΗΙΝΗ",
  "ΓΗΙΝΟ",
  "ΓΗΡΑΣ",
  "ΓΙΑΤΙ",
  "ΓΙΝΕΙ",
  "ΓΙΟΥΣ",
  "ΓΙΩΤΑ",
  "ΓΚΑΖΙ",
  "ΓΚΑΜΑ",
  "ΓΚΕΣΤ",
  "ΓΚΕΤΟ",
  "ΓΚΟΛΦ",
  "ΓΚΡΑΝ",
  "ΓΚΡΑΣ",
  "ΓΛΥΚΑ",
  "ΓΛΥΚΟ",
  "ΓΛΥΦΑ",
  "ΓΝΩΜΗ",
  "ΓΝΩΣΗ",
  "ΓΟΝΕΑ",
  "ΓΟΝΟΣ",
  "ΓΟΝΟΥ",
  "ΓΟΥΔΙ",
  "ΓΟΥΝΑ",
  "ΓΡΑΦΗ",
  "ΓΡΑΦΩ",
  "ΓΡΑΨΕ",
  "ΓΡΑΨΩ",
  "ΓΡΙΒΑ",
  "ΓΡΙΠΗ",
  "ΓΥΑΛΙ",
  "ΓΥΜΝΑ",
  "ΓΥΜΝΗ",
  "ΓΥΜΝΟ",
  "ΓΥΠΑΣ",
  "ΓΥΠΕΣ",
  "ΓΥΡΟΙ",
  "ΓΥΡΟΣ",
  "ΓΥΡΟΥ",
  "ΓΥΡΩΝ",
  "ΓΥΨΟΣ",
  "ΓΩΝΙΑ",
  "ΔΑΚΡΥ",
  "ΔΑΣΟΣ",
  "ΔΑΣΩΝ",
  "ΔΑΦΝΗ",
  "ΔΕΙΝΑ",
  "ΔΕΙΝΗ",
  "ΔΕΙΤΕ",
  "ΔΕΚΤΑ",
  "ΔΕΚΤΗ",
  "ΔΕΚΤΟ",
  "ΔΕΛΤΑ",
  "ΔΕΝΕΙ",
  "ΔΕΞΙΑ",
  "ΔΕΞΙΟ",
  "ΔΕΡΜΑ",
  "ΔΕΣΜΑ",
  "ΔΕΣΜΗ",
  "ΔΕΣΜΟ",
  "ΔΗΘΕΝ",
  "ΔΗΛΟΣ",
  "ΔΗΛΟΥ",
  "ΔΗΜΙΟ",
  "ΔΗΜΟΙ",
  "ΔΗΜΟΣ",
  "ΔΗΜΟΥ",
  "ΔΗΜΩΝ",
  "ΔΙΔΕΙ",
  "ΔΙΕΣΗ",
  "ΔΙΕΤΗ",
  "ΔΙΚΕΣ",
  "ΔΙΚΗΣ",
  "ΔΙΚΙΑ",
  "ΔΙΚΙΟ",
  "ΔΙΚΟΙ",
  "ΔΙΚΟΣ",
  "ΔΙΚΟΥ",
  "ΔΙΚΩΝ",
  "ΔΙΝΕΙ",
  "ΔΙΟΔΟ",
  "ΔΙΟΤΙ",
  "ΔΙΠΛΑ",
  "ΔΙΠΛΗ",
  "ΔΙΠΛΟ",
  "ΔΙΣΚΟ",
  "ΔΙΧΤΥ",
  "ΔΙΧΩΣ",
  "ΔΙΩΞΗ",
  "ΔΟΓΗΣ",
  "ΔΟΓΜΑ",
  "ΔΟΘΕΙ",
  "ΔΟΚΟΣ",
  "ΔΟΜΕΣ",
  "ΔΟΜΗΣ",
  "ΔΟΜΟΣ",
  "ΔΟΜΩΝ",
  "ΔΟΝΤΙ",
  "ΔΟΞΑΣ",
  "ΔΟΣΗΣ",
  "ΔΟΥΚΑ",
  "ΔΟΥΜΕ",
  "ΔΡΑΚΟ",
  "ΔΡΑΜΑ",
  "ΔΡΑΣΗ",
  "ΔΡΟΜΟ",
  "ΔΡΟΥΝ",
  "ΔΡΥΜΟ",
  "ΔΡΥΟΣ",
  "ΔΥΣΗΣ",
  "ΔΥΤΕΣ",
  "ΔΩΡΕΑ",
  "ΔΩΡΩΝ",
  "ΔΩΣΕΙ",
  "ΔΩΣΤΕ",
  "ΕΑΥΤΟ",
  "ΕΒΑΖΕ",
  "ΕΒΑΛΑ",
  "ΕΒΑΛΕ",
  "ΕΓΓΥΣ",
  "ΕΓΙΝΕ",
  "ΕΓΚΥΟ",
  "ΕΔΑΦΗ",
  "ΕΔΙΝΕ",
  "ΕΔΡΑΣ",
  "ΕΔΡΕΣ",
  "ΕΔΡΩΝ",
  "ΕΔΩΣΑ",
  "ΕΔΩΣΕ",
  "ΕΖΗΣΕ",
  "ΕΘΑΨΕ",
  "ΕΘΕΣΑ",
  "ΕΘΕΣΕ",
  "ΕΘΕΤΕ",
  "ΕΘΙΜΑ",
  "ΕΘΙΜΟ",
  "ΕΘΝΟΣ",
  "ΕΘΝΩΝ",
  "ΕΙΔΑΝ",
  "ΕΙΔΕΙ",
  "ΕΙΔΕΣ",
  "ΕΙΔΟΣ",
  "ΕΙΔΩΝ",
  "ΕΙΜΑΙ",
  "ΕΙΝΑΙ",
  "ΕΙΠΑΝ",
  "ΕΙΠΕΣ",
  "ΕΙΣΑΙ",
  "ΕΙΣΤΕ",
  "ΕΙΧΑΝ",
  "ΕΙΧΕΣ",
  "ΕΚΑΝΑ",
  "ΕΚΑΝΕ",
  "ΕΚΑΤΟ",
  "ΕΚΑΨΕ",
  "ΕΚΟΨΕ",
  "ΕΚΡΟΗ",
  "ΕΚΤΗΣ",
  "ΕΚΤΟΣ",
  "ΕΚΤΟΥ",
  "ΕΛΑΒΕ",
  "ΕΛΑΙΑ",
  "ΕΛΑΙΟ",
  "ΕΛΑΤΑ",
  "ΕΛΑΤΗ",
  "ΕΛΑΤΟ",
  "ΕΛΑΦΙ",
  "ΕΛΕΓΑ",
  "ΕΛΕΓΕ",
  "ΕΛΕΟΣ",
  "ΕΛΗΓΕ",
  "ΕΛΗΞΕ",
  "ΕΛΘΕΙ",
  "ΕΛΙΑΣ",
  "ΕΛΙΕΣ",
  "ΕΛΙΚΑ",
  "ΕΛΚΕΙ",
  "ΕΛΚΟΣ",
  "ΕΛΞΗΣ",
  "ΕΛΟΥΣ",
  "ΕΛΥΣΕ",
  "ΕΜΑΘΑ",
  "ΕΜΑΘΕ",
  "ΕΜΕΙΣ",
  "ΕΜΕΝΑ",
  "ΕΜΕΝΕ",
  "ΕΜΕΤΟ",
  "ΕΜΙΡΗ",
  "ΕΝΑΤΗ",
  "ΕΝΑΤΟ",
  "ΕΝΕΚΑ",
  "ΕΝΕΣΗ",
  "ΕΝΙΚΟ",
  "ΕΝΝΕΑ",
  "ΕΝΝΙΑ",
  "ΕΝΝΟΩ",
  "ΕΝΟΣΩ",
  "ΕΝΟΧΗ",
  "ΕΝΟΧΟ",
  "ΕΝΤΟΣ",
  "ΕΝΩΝΕ",
  "ΕΝΩΣΕ",
  "ΕΝΩΣΗ",
  "ΕΞΟΔΑ",
  "ΕΞΟΔΟ",
  "ΕΞΟΧΗ",
  "ΕΞΤΡΑ",
  "ΕΞΩΣΗ",
  "ΕΟΡΤΗ",
  "ΕΠΑΘΕ",
  "ΕΠΑΝΩ",
  "ΕΠΑΦΗ",
  "ΕΠΑΨΕ",
  "ΕΠΕΣΕ",
  "ΕΠΙΚΗ",
  "ΕΠΙΚΟ",
  "ΕΠΟΥΣ",
  "ΕΠΟΧΗ",
  "ΕΡΓΟΝ",
  "ΕΡΓΟΥ",
  "ΕΡΓΩΝ",
  "ΕΡΗΜΗ",
  "ΕΡΗΜΟ",
  "ΕΡΘΕΙ",
  "ΕΡΙΔΑ",
  "ΕΡΙΞΕ",
  "ΕΡΜΗΣ",
  "ΕΡΜΟΥ",
  "ΕΡΩΤΑ",
  "ΕΣΕΙΣ",
  "ΕΣΕΝΑ",
  "ΕΣΟΔΑ",
  "ΕΣΟΧΗ",
  "ΕΣΤΙΑ",
  "ΕΣΩΣΕ",
  "ΕΤΑΦΗ",
  "ΕΤΕΡΟ",
  "ΕΤΟΥΣ",
  "ΕΤΥΧΕ",
  "ΕΥΘΥΣ",
  "ΕΥΡΟΣ",
  "ΕΥΧΕΣ",
  "ΕΦΑΓΕ",
  "ΕΦΕΡΕ",
  "ΕΦΕΣΗ",
  "ΕΦΗΒΗ",
  "ΕΦΗΒΟ",
  "ΕΦΟΔΟ",
  "ΕΦΟΡΟ",
  "ΕΦΥΓΕ",
  "ΕΧΑΝΕ",
  "ΕΧΑΣΕ",
  "ΕΧΕΙΣ",
  "ΕΧΕΤΕ",
  "ΕΧΘΡΑ",
  "ΕΧΘΡΟ",
  "ΕΧΟΥΝ",
  "ΖΑΡΙΑ",
  "ΖΕΒΡΑ",
  "ΖΕΝΙΘ",
  "ΖΕΡΒΑ",
  "ΖΕΣΤΑ",
  "ΖΕΣΤΗ",
  "ΖΕΣΤΟ",
  "ΖΕΥΓΗ",
  "ΖΗΛΙΑ",
  "ΖΗΜΙΑ",
  "ΖΗΣΕΙ",
  "ΖΗΣΗΣ",
  "ΖΗΤΑΣ",
  "ΖΗΤΑΩ",
  "ΖΟΜΠΙ",
  "ΖΟΥΜΕ",
  "ΖΟΥΣΕ",
  "ΖΥΓΟΣ",
  "ΖΥΓΟΥ",
  "ΖΥΜΗΣ",
  "ΖΩΔΙΟ",
  "ΖΩΗΡΑ",
  "ΖΩΙΚΑ",
  "ΖΩΙΚΗ",
  "ΖΩΙΚΟ",
  "ΖΩΝΕΣ",
  "ΖΩΝΗΣ",
  "ΖΩΝΩΝ",
  "ΗΓΕΤΗ",
  "ΗΔΟΝΗ",
  "ΗΘΕΛΑ",
  "ΗΘΕΛΕ",
  "ΗΘΙΚΑ",
  "ΗΘΙΚΗ",
  "ΗΘΙΚΟ",
  "ΗΘΟΥΣ",
  "ΗΛΘΑΝ",
  "ΗΛΙΟΣ",
  "ΗΛΙΟΥ",
  "ΗΜΕΡΑ",
  "ΗΜΕΡΟ",
  "ΗΜΙΣΥ",
  "ΗΜΟΥΝ",
  "ΗΞΕΡΑ",
  "ΗΞΕΡΕ",
  "ΗΠΙΕΣ",
  "ΗΡΑΙΑ",
  "ΗΡΕΜΑ",
  "ΗΡΕΜΗ",
  "ΗΡΕΜΟ",
  "ΗΡΘΑΝ",
  "ΗΡΩΑΣ",
  "ΗΡΩΕΣ",
  "ΗΡΩΩΝ",
  "ΗΣΟΥΝ",
  "ΗΣΥΧΑ",
  "ΗΣΥΧΗ",
  "ΗΣΥΧΟ",
  "ΗΤΑΝΕ",
  "ΗΤΤΑΣ",
  "ΗΤΤΕΣ",
  "ΗΤΤΩΝ",
  "ΗΧΗΡΟ",
  "ΗΧΟΥΣ",
  "ΘΑΥΜΑ",
  "ΘΕΑΜΑ",
  "ΘΕΑΣΗ",
  "ΘΕΑΤΗ",
  "ΘΕΙΑΣ",
  "ΘΕΙΕΣ",
  "ΘΕΙΚΗ",
  "ΘΕΙΚΟ",
  "ΘΕΙΟΣ",
  "ΘΕΙΟΥ",
  "ΘΕΙΩΝ",
  "ΘΕΛΕΙ",
  "ΘΕΜΙΣ",
  "ΘΕΟΥΣ",
  "ΘΕΡΜΑ",
  "ΘΕΡΜΗ",
  "ΘΕΡΜΟ",
  "ΘΕΡΟΣ",
  "ΘΕΣΕΙ",
  "ΘΕΣΗΣ",
  "ΘΕΣΙΝ",
  "ΘΕΣΜΟ",
  "ΘΕΤΕΙ",
  "ΘΕΤΟΣ",
  "ΘΕΩΡΩ",
  "ΘΗΡΑΣ",
  "ΘΗΡΙΑ",
  "ΘΗΡΙΟ",
  "ΘΙΑΣΟ",
  "ΘΛΙΨΗ",
  "ΘΟΛΟΣ",
  "ΘΟΛΟΥ",
  "ΘΡΟΝΟ",
  "ΘΡΥΛΟ",
  "ΘΥΜΟΣ",
  "ΘΥΜΟΥ",
  "ΘΥΡΑΣ",
  "ΘΥΡΕΟ",
  "ΘΥΡΕΣ",
  "ΘΥΡΩΝ",
  "ΘΥΣΙΑ",
  "ΙΑΤΡΟ",
  "ΙΔΕΑΣ",
  "ΙΔΕΕΣ",
  "ΙΔΕΩΝ",
  "ΙΔΙΑΝ",
  "ΙΔΙΑΣ",
  "ΙΔΙΕΣ",
  "ΙΔΙΟΙ",
  "ΙΔΙΟΝ",
  "ΙΔΙΟΣ",
  "ΙΔΙΟΥ",
  "ΙΔΙΩΝ",
  "ΙΔΙΩΣ",
  "ΙΕΡΑΞ",
  "ΙΕΡΕΑ",
  "ΙΕΡΕΣ",
  "ΙΕΡΗΣ",
  "ΙΕΡΟΙ",
  "ΙΕΡΟΝ",
  "ΙΕΡΟΣ",
  "ΙΕΡΟΥ",
  "ΙΕΡΩΝ",
  "ΙΖΗΜΑ",
  "ΙΚΑΝΑ",
  "ΙΚΑΝΗ",
  "ΙΚΑΝΟ",
  "ΙΛΑΡΑ",
  "ΙΝΤΣΑ",
  "ΙΟΝΙΑ",
  "ΙΟΝΙΟ",
  "ΙΟΝΤΑ",
  "ΙΠΠΟΙ",
  "ΙΠΠΟΣ",
  "ΙΠΠΟΥ",
  "ΙΠΠΩΝ",
  "ΙΡΙΔΑ",
  "ΙΣΘΜΟ",
  "ΙΣΛΑΜ",
  "ΙΣΤΙΑ",
  "ΙΣΤΟΙ",
  "ΙΣΤΟΣ",
  "ΙΣΤΟΥ",
  "ΙΣΤΩΝ",
  "ΙΣΧΥΕ",
  "ΙΣΧΥΣ",
  "ΙΤΙΕΣ",
  "ΙΧΘΥΣ",
  "ΙΧΝΟΣ",
  "ΙΩΔΙΟ",
  "ΙΩΝΙΑ",
  "ΚΑΒΟΣ",
  "ΚΑΗΚΕ",
  "ΚΑΘΩΣ",
  "ΚΑΙΕΙ",
  "ΚΑΙΝΗ",
  "ΚΑΙΡΟ",
  "ΚΑΙΡΩ",
  "ΚΑΚΑΟ",
  "ΚΑΚΕΣ",
  "ΚΑΚΗΣ",
  "ΚΑΚΙΑ",
  "ΚΑΚΟΙ",
  "ΚΑΚΟΣ",
  "ΚΑΚΟΥ",
  "ΚΑΚΩΝ",
  "ΚΑΚΩΣ",
  "ΚΑΛΑΙ",
  "ΚΑΛΕΙ",
  "ΚΑΛΕΣ",
  "ΚΑΛΗΣ",
  "ΚΑΛΙΟ",
  "ΚΑΛΟΙ",
  "ΚΑΛΟΝ",
  "ΚΑΛΟΣ",
  "ΚΑΛΟΥ",
  "ΚΑΛΠΗ",
  "ΚΑΛΩΝ",
  "ΚΑΛΩΣ",
  "ΚΑΜΒΑ",
  "ΚΑΜΙΑ",
  "ΚΑΜΠΗ",
  "ΚΑΜΠΟ",
  "ΚΑΜΨΗ",
  "ΚΑΝΕΙ",
  "ΚΑΝΤΕ",
  "ΚΑΝΩΝ",
  "ΚΑΠΝΟ",
  "ΚΑΠΟΥ",
  "ΚΑΠΩΣ",
  "ΚΑΡΑΣ",
  "ΚΑΡΕΣ",
  "ΚΑΡΜΑ",
  "ΚΑΡΠΟ",
  "ΚΑΡΤΑ",
  "ΚΑΡΥΑ",
  "ΚΑΣΤΑ",
  "ΚΑΤΣΕ",
  "ΚΑΥΓΑ",
  "ΚΑΥΣΗ",
  "ΚΑΥΤΗ",
  "ΚΑΥΤΟ",
  "ΚΑΦΕΣ",
  "ΚΑΨΕΙ",
  "ΚΕΛΙΑ",
  "ΚΕΝΕΣ",
  "ΚΕΝΟΣ",
  "ΚΕΝΟΥ",
  "ΚΕΝΩΝ",
  "ΚΕΡΑΣ",
  "ΚΕΡΔΗ",
  "ΚΕΡΙΑ",
  "ΚΕΡΜΑ",
  "ΚΗΠΟΙ",
  "ΚΗΠΟΣ",
  "ΚΗΠΟΥ",
  "ΚΗΠΩΝ",
  "ΚΗΤΟΣ",
  "ΚΙΛΩΝ",
  "ΚΙΝΑΣ",
  "ΚΙΝΕΙ",
  "ΚΙΟΝΑ",
  "ΚΙΣΣΑ",
  "ΚΛΑΔΙ",
  "ΚΛΑΔΟ",
  "ΚΛΑΜΑ",
  "ΚΛΑΜΠ",
  "ΚΛΑΡΑ",
  "ΚΛΑΣΗ",
  "ΚΛΕΙΩ",
  "ΚΛΕΩΝ",
  "ΚΛΗΜΑ",
  "ΚΛΗΡΟ",
  "ΚΛΗΣΗ",
  "ΚΛΙΜΑ",
  "ΚΛΙΝΗ",
  "ΚΛΙΣΗ",
  "ΚΛΙΤΗ",
  "ΚΛΟΙΟ",
  "ΚΛΟΠΗ",
  "ΚΟΒΕΙ",
  "ΚΟΓΧΗ",
  "ΚΟΙΛΗ",
  "ΚΟΙΛΟ",
  "ΚΟΙΝΑ",
  "ΚΟΙΝΗ",
  "ΚΟΙΝΟ",
  "ΚΟΙΤΑ",
  "ΚΟΙΤΗ",
  "ΚΟΛΛΑ",
  "ΚΟΛΟΝ",
  "ΚΟΛΠΑ",
  "ΚΟΛΠΟ",
  "ΚΟΜΒΟ",
  "ΚΟΜΗΣ",
  "ΚΟΜΙΚ",
  "ΚΟΜΜΑ",
  "ΚΟΜΠΕ",
  "ΚΟΜΨΑ",
  "ΚΟΜΨΗ",
  "ΚΟΜΨΟ",
  "ΚΟΝΤΑ",
  "ΚΟΝΤΕ",
  "ΚΟΝΤΗ",
  "ΚΟΝΤΟ",
  "ΚΟΠΕΙ",
  "ΚΟΠΗΣ",
  "ΚΟΠΟΣ",
  "ΚΟΡΕΣ",
  "ΚΟΡΗΣ",
  "ΚΟΡΜΙ",
  "ΚΟΡΜΟ",
  "ΚΟΡΝΟ",
  "ΚΟΡΟΝ",
  "ΚΟΣΜΟ",
  "ΚΟΣΤΗ",
  "ΚΟΤΕΣ",
  "ΚΟΥΒΑ",
  "ΚΟΥΛΑ",
  "ΚΟΥΛΗ",
  "ΚΟΥΠΑ",
  "ΚΟΥΠΕ",
  "ΚΟΥΠΙ",
  "ΚΟΥΡΑ",
  "ΚΟΥΤΙ",
  "ΚΟΨΕΙ",
  "ΚΡΑΜΑ",
  "ΚΡΑΝΗ",
  "ΚΡΑΣΙ",
  "ΚΡΑΤΑ",
  "ΚΡΑΤΗ",
  "ΚΡΕΑΣ",
  "ΚΡΕΜΑ",
  "ΚΡΗΝΗ",
  "ΚΡΙΜΑ",
  "ΚΡΙΝΩ",
  "ΚΡΙΟΣ",
  "ΚΡΙΟΥ",
  "ΚΡΙΣΗ",
  "ΚΡΙΤΗ",
  "ΚΡΥΑΣ",
  "ΚΡΥΦΑ",
  "ΚΡΥΦΗ",
  "ΚΡΥΦΟ",
  "ΚΤΗΜΑ",
  "ΚΤΗΣΗ",
  "ΚΥΑΝΗ",
  "ΚΥΑΝΟ",
  "ΚΥΒΟΣ",
  "ΚΥΒΟΥ",
  "ΚΥΗΣΗ",
  "ΚΥΚΛΟ",
  "ΚΥΝΟΣ",
  "ΚΥΡΙΑ",
  "ΚΥΡΙΕ",
  "ΚΥΡΙΟ",
  "ΚΥΡΟΣ",
  "ΚΥΡΤΑ",
  "ΚΥΡΤΗ",
  "ΚΥΡΤΟ",
  "ΚΥΣΤΗ",
  "ΚΩΝΟΣ",
  "ΚΩΝΟΥ",
  "ΚΩΦΩΝ",
  "ΛΑΒΑΣ",
  "ΛΑΒΕΙ",
  "ΛΑΒΕΣ",
  "ΛΑΓΟΣ",
  "ΛΑΓΟΥ",
  "ΛΑΔΑΣ",
  "ΛΑΔΙΑ",
  "ΛΑΖΟΣ",
  "ΛΑΘΟΣ",
  "ΛΑΘΩΝ",
  "ΛΑΙΔΗ",
  "ΛΑΙΚΑ",
  "ΛΑΙΚΗ",
  "ΛΑΙΚΟ",
  "ΛΑΙΜΟ",
  "ΛΑΚΚΟ",
  "ΛΑΛΑΣ",
  "ΛΑΜΔΑ",
  "ΛΑΜΙΑ",
  "ΛΑΜΠΑ",
  "ΛΑΜΨΗ",
  "ΛΑΝΤΟ",
  "ΛΑΟΥΣ",
  "ΛΑΣΠΗ",
  "ΛΑΤΙΝ",
  "ΛΑΥΡΑ",
  "ΛΕΓΕΙ",
  "ΛΕΙΑΣ",
  "ΛΕΞΗΣ",
  "ΛΕΠΙΑ",
  "ΛΕΠΡΑ",
  "ΛΕΠΤΑ",
  "ΛΕΠΤΗ",
  "ΛΕΠΤΟ",
  "ΛΕΡΟΣ",
  "ΛΕΡΟΥ",
  "ΛΕΣΧΗ",
  "ΛΕΤΣΕ",
  "ΛΕΥΚΑ",
  "ΛΕΥΚΗ",
  "ΛΕΥΚΟ",
  "ΛΕΦΤΑ",
  "ΛΗΓΕΙ",
  "ΛΗΜΜΑ",
  "ΛΗΞΕΙ",
  "ΛΗΞΗΣ",
  "ΛΗΨΗΣ",
  "ΛΙΑΝΑ",
  "ΛΙΓΕΣ",
  "ΛΙΓΚΑ",
  "ΛΙΓΟΙ",
  "ΛΙΓΩΝ",
  "ΛΙΘΟΙ",
  "ΛΙΘΟΣ",
  "ΛΙΘΟΥ",
  "ΛΙΘΩΝ",
  "ΛΙΚΕΡ",
  "ΛΙΜΗΝ",
  "ΛΙΜΝΗ",
  "ΛΙΜΟΣ",
  "ΛΙΜΟΥ",
  "ΛΙΝΟΣ",
  "ΛΙΠΟΣ",
  "ΛΙΡΑΣ",
  "ΛΙΡΕΣ",
  "ΛΙΡΩΝ",
  "ΛΙΣΤΑ",
  "ΛΙΤΡΑ",
  "ΛΙΤΡΟ",
  "ΛΟΓΙΑ",
  "ΛΟΓΙΟ",
  "ΛΟΓΟΙ",
  "ΛΟΓΟΝ",
  "ΛΟΓΟΣ",
  "ΛΟΓΟΥ",
  "ΛΟΓΧΗ",
  "ΛΟΓΩΝ",
  "ΛΟΙΠΑ",
  "ΛΟΜΠΙ",
  "ΛΟΡΔΟ",
  "ΛΟΥΛΑ",
  "ΛΟΥΝΑ",
  "ΛΟΥΦΑ",
  "ΛΟΦΙΟ",
  "ΛΟΦΟΙ",
  "ΛΟΦΟΣ",
  "ΛΟΦΟΥ",
  "ΛΟΦΩΝ",
  "ΛΟΧΙΑ",
  "ΛΟΧΟΣ",
  "ΛΟΧΟΥ",
  "ΛΥΔΙΑ",
  "ΛΥΘΕΙ",
  "ΛΥΚΟΙ",
  "ΛΥΚΟΣ",
  "ΛΥΚΟΥ",
  "ΛΥΚΩΝ",
  "ΛΥΝΕΙ",
  "ΛΥΡΑΣ",
  "ΛΥΣΕΙ",
  "ΛΥΣΗΣ",
  "ΛΥΤΡΑ",
  "ΜΑΓΙΑ",
  "ΜΑΓΙΟ",
  "ΜΑΓΟΙ",
  "ΜΑΓΟΣ",
  "ΜΑΓΟΥ",
  "ΜΑΓΩΝ",
  "ΜΑΖΑΣ",
  "ΜΑΖΕΣ",
  "ΜΑΖΩΝ",
  "ΜΑΘΕΙ",
  "ΜΑΚΡΑ",
  "ΜΑΚΡΗ",
  "ΜΑΚΡΟ",
  "ΜΑΚΡΥ",
  "ΜΑΛΛΙ",
  "ΜΑΜΑΣ",
  "ΜΑΝΑΣ",
  "ΜΑΝΗΣ",
  "ΜΑΝΙΑ",
  "ΜΑΝΝΑ",
  "ΜΑΝΟΣ",
  "ΜΑΝΟΥ",
  "ΜΑΡΚΑ",
  "ΜΑΡΚΟ",
  "ΜΑΣΑΣ",
  "ΜΑΣΙΦ",
  "ΜΑΣΚΑ",
  "ΜΑΤΙΑ",
  "ΜΑΥΡΑ",
  "ΜΑΥΡΗ",
  "ΜΑΥΡΟ",
  "ΜΑΦΙΑ",
  "ΜΑΧΕΣ",
  "ΜΑΧΗΣ",
  "ΜΑΧΩΝ",
  "ΜΕΓΑΣ",
  "ΜΕΙΟΝ",
  "ΜΕΛΑΣ",
  "ΜΕΛΙΑ",
  "ΜΕΛΟΣ",
  "ΜΕΛΠΩ",
  "ΜΕΛΩΝ",
  "ΜΕΝΕΙ",
  "ΜΕΝΟΣ",
  "ΜΕΝΟΥ",
  "ΜΕΝΤΑ",
  "ΜΕΡΑΣ",
  "ΜΕΡΕΙ",
  "ΜΕΡΕΣ",
  "ΜΕΡΙΑ",
  "ΜΕΡΟΣ",
  "ΜΕΡΩΝ",
  "ΜΕΣΕΣ",
  "ΜΕΣΗΣ",
  "ΜΕΣΟΙ",
  "ΜΕΣΟΝ",
  "ΜΕΣΟΣ",
  "ΜΕΣΟΥ",
  "ΜΕΣΩΝ",
  "ΜΕΤΡΑ",
  "ΜΕΤΡΟ",
  "ΜΕΧΡΙ",
  "ΜΗΔΕΝ",
  "ΜΗΚΟΣ",
  "ΜΗΚΩΝ",
  "ΜΗΛΕΑ",
  "ΜΗΛΙΑ",
  "ΜΗΛΟΥ",
  "ΜΗΝΑΣ",
  "ΜΗΝΕΣ",
  "ΜΗΝΟΣ",
  "ΜΗΝΩΝ",
  "ΜΗΠΩΣ",
  "ΜΗΤΙΣ",
  "ΜΗΤΡΑ",
  "ΜΙΚΡΑ",
  "ΜΙΚΡΗ",
  "ΜΙΚΡΟ",
  "ΜΙΚΤΑ",
  "ΜΙΚΤΗ",
  "ΜΙΚΤΟ",
  "ΜΙΛΑΝ",
  "ΜΙΛΑΣ",
  "ΜΙΛΑΩ",
  "ΜΙΛΙΑ",
  "ΜΙΝΑΣ",
  "ΜΙΝΘΗ",
  "ΜΙΣΕΙ",
  "ΜΙΣΕΣ",
  "ΜΙΣΗΣ",
  "ΜΙΣΘΟ",
  "ΜΙΣΟΙ",
  "ΜΙΣΟΣ",
  "ΜΙΣΟΥ",
  "ΜΝΕΙΑ",
  "ΜΝΗΜΑ",
  "ΜΝΗΜΗ",
  "ΜΟΔΑΣ",
  "ΜΟΙΡΑ",
  "ΜΟΛΙΣ",
  "ΜΟΝΕΣ",
  "ΜΟΝΗΣ",
  "ΜΟΝΟΙ",
  "ΜΟΝΟΝ",
  "ΜΟΝΟΣ",
  "ΜΟΝΟΥ",
  "ΜΟΝΩΝ",
  "ΜΟΡΙΑ",
  "ΜΟΡΙΟ",
  "ΜΟΡΦΗ",
  "ΜΟΥΡΑ",
  "ΜΟΥΣΑ",
  "ΜΠΑΛΑ",
  "ΜΠΑΡΑ",
  "ΜΠΑΣΑ",
  "ΜΠΑΣΟ",
  "ΜΠΕΗΣ",
  "ΜΠΕΛΑ",
  "ΜΠΕΣΑ",
  "ΜΠΕΣΤ",
  "ΜΠΗΚΕ",
  "ΜΠΙΡΑ",
  "ΜΠΛΟΚ",
  "ΜΠΟΕΜ",
  "ΜΠΟΡΑ",
  "ΜΠΟΡΩ",
  "ΜΠΟΥΑ",
  "ΜΠΟΥΝ",
  "ΜΠΡΟΣ",
  "ΜΠΥΡΑ",
  "ΜΥΑΛΑ",
  "ΜΥΑΛΟ",
  "ΜΥΓΕΣ",
  "ΜΥΕΛΟ",
  "ΜΥΗΣΗ",
  "ΜΥΘΟΙ",
  "ΜΥΘΟΣ",
  "ΜΥΘΟΥ",
  "ΜΥΘΩΝ",
  "ΜΥΙΚΗ",
  "ΜΥΙΚΟ",
  "ΜΥΛΟΙ",
  "ΜΥΛΟΣ",
  "ΜΥΛΩΝ",
  "ΜΥΡΙΑ",
  "ΜΥΡΩΝ",
  "ΜΥΤΗΣ",
  "ΜΩΛΟΥ",
  "ΜΩΡΙΑ",
  "ΜΩΡΟΥ",
  "ΝΑΝΟΙ",
  "ΝΑΝΟΣ",
  "ΝΑΝΟΥ",
  "ΝΑΝΩΝ",
  "ΝΑΟΥΣ",
  "ΝΑΡΚΗ",
  "ΝΕΑΡΑ",
  "ΝΕΑΡΗ",
  "ΝΕΑΡΟ",
  "ΝΕΚΡΑ",
  "ΝΕΚΡΗ",
  "ΝΕΚΡΟ",
  "ΝΕΟΥΣ",
  "ΝΕΡΟΥ",
  "ΝΕΡΩΝ",
  "ΝΕΥΡΑ",
  "ΝΕΥΡΟ",
  "ΝΕΦΟΣ",
  "ΝΕΦΡΑ",
  "ΝΕΦΩΝ",
  "ΝΗΠΙΑ",
  "ΝΗΠΙΟ",
  "ΝΗΣΙΑ",
  "ΝΗΣΟΙ",
  "ΝΗΣΟΣ",
  "ΝΗΣΟΥ",
  "ΝΗΣΩΝ",
  "ΝΙΑΤΑ",
  "ΝΙΚΑΣ",
  "ΝΙΚΕΣ",
  "ΝΙΚΗΣ",
  "ΝΙΚΩΝ",
  "ΝΙΤΡΑ",
  "ΝΙΩΘΩ",
  "ΝΟΗΜΑ",
  "ΝΟΗΣΗ",
  "ΝΟΘΟΣ",
  "ΝΟΜΟΙ",
  "ΝΟΜΟΣ",
  "ΝΟΜΟΥ",
  "ΝΟΜΩΝ",
  "ΝΟΝΟΣ",
  "ΝΟΡΜΑ",
  "ΝΟΣΟΣ",
  "ΝΟΣΟΥ",
  "ΝΟΣΩΝ",
  "ΝΟΤΕΣ",
  "ΝΟΤΙΑ",
  "ΝΟΤΙΟ",
  "ΝΟΤΟΣ",
  "ΝΟΤΟΥ",
  "ΝΟΥΑΡ",
  "ΝΟΥΒΟ",
  "ΝΤΑΜΑ",
  "ΝΤΑΝΑ",
  "ΝΤΕΚΟ",
  "ΝΤΟΡΕ",
  "ΝΤΟΥΣ",
  "ΝΥΚΤΑ",
  "ΝΥΜΦΗ",
  "ΝΥΦΕΣ",
  "ΝΥΦΗΣ",
  "ΝΥΧΙΑ",
  "ΝΥΧΤΑ",
  "ΝΩΡΙΣ",
  "ΞΑΝΘΗ",
  "ΞΕΝΕΣ",
  "ΞΕΝΗΣ",
  "ΞΕΝΙΑ",
  "ΞΕΝΟΙ",
  "ΞΕΝΟΣ",
  "ΞΕΝΟΥ",
  "ΞΕΝΩΝ",
  "ΞΕΡΕΙ",
  "ΞΕΣΠΑ",
  "ΞΗΡΑΣ",
  "ΞΗΡΕΣ",
  "ΞΗΡΟΣ",
  "ΞΗΡΟΥ",
  "ΞΙΦΟΣ",
  "ΞΟΡΚΙ",
  "ΞΥΛΟΥ",
  "ΞΥΠΝΑ",
  "ΟΓΔΟΗ",
  "ΟΓΔΟΟ",
  "ΟΓΚΟΙ",
  "ΟΓΚΟΣ",
  "ΟΓΚΟΥ",
  "ΟΓΚΩΝ",
  "ΟΔΗΓΟ",
  "ΟΔΙΚΑ",
  "ΟΔΙΚΗ",
  "ΟΔΙΚΟ",
  "ΟΔΟΥΣ",
  "ΟΘΟΝΗ",
  "ΟΙΚΙΑ",
  "ΟΙΚΟΙ",
  "ΟΙΚΟΝ",
  "ΟΙΚΟΣ",
  "ΟΙΚΟΥ",
  "ΟΙΚΩΝ",
  "ΟΙΝΟΣ",
  "ΟΙΝΟΥ",
  "ΟΛΙΚΗ",
  "ΟΛΙΚΟ",
  "ΟΛΚΟΣ",
  "ΟΛΟΥΣ",
  "ΟΜΑΔΑ",
  "ΟΜΑΛΑ",
  "ΟΜΑΛΗ",
  "ΟΜΑΛΟ",
  "ΟΜΗΡΟ",
  "ΟΜΙΛΟ",
  "ΟΜΟΙΑ",
  "ΟΜΟΙΟ",
  "ΟΜΠΟΕ",
  "ΟΝΟΜΑ",
  "ΟΝΤΑΣ",
  "ΟΝΤΟΣ",
  "ΟΝΤΩΝ",
  "ΟΝΤΩΣ",
  "ΟΞΕΙΑ",
  "ΟΞΕΟΣ",
  "ΟΞΕΩΝ",
  "ΟΞΕΩΣ",
  "ΟΞΙΚΟ",
  "ΟΞΙΝΑ",
  "ΟΞΙΝΗ",
  "ΟΞΙΝΟ",
  "ΟΠΑΔΟ",
  "ΟΠΕΡΑ",
  "ΟΠΙΟΥ",
  "ΟΠΛΟΥ",
  "ΟΠΛΩΝ",
  "ΟΠΟΙΑ",
  "ΟΠΟΙΟ",
  "ΟΠΟΤΕ",
  "ΟΡΑΜΑ",
  "ΟΡΑΣΗ",
  "ΟΡΑΤΑ",
  "ΟΡΑΤΗ",
  "ΟΡΑΤΟ",
  "ΟΡΓΗΣ",
  "ΟΡΔΗΣ",
  "ΟΡΕΞΗ",
  "ΟΡΘΕΣ",
  "ΟΡΘΗΣ",
  "ΟΡΘΙΑ",
  "ΟΡΘΙΟ",
  "ΟΡΘΟΣ",
  "ΟΡΘΟΥ",
  "ΟΡΘΩΣ",
  "ΟΡΙΖΕ",
  "ΟΡΙΟΥ",
  "ΟΡΙΣΕ",
  "ΟΡΙΩΝ",
  "ΟΡΚΟΣ",
  "ΟΡΚΟΥ",
  "ΟΡΜΗΣ",
  "ΟΡΜΟΙ",
  "ΟΡΜΟΣ",
  "ΟΡΜΟΥ",
  "ΟΡΟΥΣ",
  "ΟΡΟΦΗ",
  "ΟΡΟΦΟ",
  "ΟΣΙΑΣ",
  "ΟΣΙΟΣ",
  "ΟΣΙΟΥ",
  "ΟΣΙΩΝ",
  "ΟΣΚΑΡ",
  "ΟΣΜΗΣ",
  "ΟΣΜΙΟ",
  "ΟΣΟΥΣ",
  "ΟΣΤΟΥ",
  "ΟΣΤΩΝ",
  "ΟΥΔΕΝ",
  "ΟΥΛΕΣ",
  "ΟΥΡΑΣ",
  "ΟΥΡΕΣ",
  "ΟΥΡΙΑ",
  "ΟΥΡΩΝ",
  "ΟΥΣΙΑ",
  "ΟΥΤΩΣ",
  "ΟΦΕΛΗ",
  "ΟΦΕΩΣ",
  "ΟΧΗΜΑ",
  "ΟΧΘΕΣ",
  "ΟΧΘΗΣ",
  "ΟΧΛΟΣ",
  "ΟΧΥΡΑ",
  "ΟΧΥΡΟ",
  "ΟΨΕΙΣ",
  "ΠΑΓΙΑ",
  "ΠΑΓΚΟ",
  "ΠΑΓΟΣ",
  "ΠΑΓΟΥ",
  "ΠΑΓΩΝ",
  "ΠΑΘΕΙ",
  "ΠΑΘΟΣ",
  "ΠΑΘΩΝ",
  "ΠΑΙΔΙ",
  "ΠΑΙΖΩ",
  "ΠΑΛΑΙ",
  "ΠΑΛΑΣ",
  "ΠΑΛΗΣ",
  "ΠΑΛΙΑ",
  "ΠΑΛΙΝ",
  "ΠΑΛΙΟ",
  "ΠΑΛΜΟ",
  "ΠΑΛΤΟ",
  "ΠΑΝΑΣ",
  "ΠΑΝΕΛ",
  "ΠΑΝΙΑ",
  "ΠΑΝΤΑ",
  "ΠΑΠΑΣ",
  "ΠΑΠΕΣ",
  "ΠΑΠΙΑ",
  "ΠΑΠΩΝ",
  "ΠΑΡΕΑ",
  "ΠΑΡΕΙ",
  "ΠΑΡΙΟ",
  "ΠΑΡΚΑ",
  "ΠΑΡΚΕ",
  "ΠΑΡΚΟ",
  "ΠΑΡΟΝ",
  "ΠΑΡΤΙ",
  "ΠΑΡΩΝ",
  "ΠΑΣΑΝ",
  "ΠΑΣΑΣ",
  "ΠΑΣΕΣ",
  "ΠΑΣΗΣ",
  "ΠΑΣΤΑ",
  "ΠΑΣΩΝ",
  "ΠΑΤΕΡ",
  "ΠΑΤΗΡ",
  "ΠΑΥΕΙ",
  "ΠΑΥΛΑ",
  "ΠΑΥΣΗ",
  "ΠΑΧΙΑ",
  "ΠΑΧΟΣ",
  "ΠΑΧΥΣ",
  "ΠΑΨΕΙ",
  "ΠΕΔΙΑ",
  "ΠΕΔΙΟ",
  "ΠΕΖΟΙ",
  "ΠΕΖΩΝ",
  "ΠΕΙΝΑ",
  "ΠΕΙΡΑ",
  "ΠΕΙΤΕ",
  "ΠΕΛΟΣ",
  "ΠΕΝΙΑ",
  "ΠΕΝΤΕ",
  "ΠΕΟΥΣ",
  "ΠΕΠΛΟ",
  "ΠΕΡΑΝ",
  "ΠΕΡΑΣ",
  "ΠΕΡΙΞ",
  "ΠΕΡΝΑ",
  "ΠΕΡΣΙ",
  "ΠΕΣΕΙ",
  "ΠΕΤΡΑ",
  "ΠΕΥΚΑ",
  "ΠΕΥΚΟ",
  "ΠΗΓΑΝ",
  "ΠΗΓΕΣ",
  "ΠΗΓΗΣ",
  "ΠΗΓΩΝ",
  "ΠΗΛΟΣ",
  "ΠΗΝΙΟ",
  "ΠΗΞΗΣ",
  "ΠΗΡΑΝ",
  "ΠΙΑΝΑ",
  "ΠΙΑΝΟ",
  "ΠΙΑΤΑ",
  "ΠΙΑΤΟ",
  "ΠΙΕΣΕ",
  "ΠΙΕΣΗ",
  "ΠΙΕΤΑ",
  "ΠΙΚΡΑ",
  "ΠΙΚΡΗ",
  "ΠΙΚΡΟ",
  "ΠΙΝΓΚ",
  "ΠΙΝΕΙ",
  "ΠΙΟΝΙ",
  "ΠΙΣΣΑ",
  "ΠΙΣΤΑ",
  "ΠΙΣΤΗ",
  "ΠΙΣΤΟ",
  "ΠΙΤΕΣ",
  "ΠΙΤΣΑ",
  "ΠΛΑΚΑ",
  "ΠΛΑΝΑ",
  "ΠΛΑΝΗ",
  "ΠΛΑΝΟ",
  "ΠΛΑΤΗ",
  "ΠΛΑΤΟ",
  "ΠΛΑΤΥ",
  "ΠΛΕΟΝ",
  "ΠΛΗΓΗ",
  "ΠΛΗΘΗ",
  "ΠΛΗΡΗ",
  "ΠΛΟΙΑ",
  "ΠΛΟΙΟ",
  "ΠΛΟΚΗ",
  "ΠΛΩΡΗ",
  "ΠΛΩΤΗ",
  "ΠΛΩΤΟ",
  "ΠΟΔΙΑ",
  "ΠΟΔΟΣ",
  "ΠΟΘΟΣ",
  "ΠΟΘΟΥ",
  "ΠΟΙΕΣ",
  "ΠΟΙΝΗ",
  "ΠΟΙΟΙ",
  "ΠΟΙΟΝ",
  "ΠΟΙΟΣ",
  "ΠΟΚΕΡ",
  "ΠΟΛΗΣ",
  "ΠΟΛΙΝ",
  "ΠΟΛΙΣ",
  "ΠΟΛΛΑ",
  "ΠΟΛΛΗ",
  "ΠΟΛΟΣ",
  "ΠΟΛΟΥ",
  "ΠΟΛΥΣ",
  "ΠΟΛΩΝ",
  "ΠΟΜΠΗ",
  "ΠΟΜΠΟ",
  "ΠΟΝΓΚ",
  "ΠΟΝΟΣ",
  "ΠΟΝΟΥ",
  "ΠΟΝΤΕ",
  "ΠΟΝΤΟ",
  "ΠΟΡΝΗ",
  "ΠΟΡΝΟ",
  "ΠΟΡΟΙ",
  "ΠΟΡΟΣ",
  "ΠΟΡΟΥ",
  "ΠΟΡΤΑ",
  "ΠΟΡΤΟ",
  "ΠΟΡΩΝ",
  "ΠΟΣΕΣ",
  "ΠΟΣΟΙ",
  "ΠΟΣΟΝ",
  "ΠΟΣΟΥ",
  "ΠΟΣΤΟ",
  "ΠΟΤΟΥ",
  "ΠΟΤΩΝ",
  "ΠΟΥΛΑ",
  "ΠΟΥΛΙ",
  "ΠΟΥΜΕ",
  "ΠΟΥΝΕ",
  "ΠΡΑΞΗ",
  "ΠΡΙΜΟ",
  "ΠΡΟΒΑ",
  "ΠΡΟΖΑ",
  "ΠΡΩΗΝ",
  "ΠΡΩΤΑ",
  "ΠΡΩΤΗ",
  "ΠΡΩΤΟ",
  "ΠΤΗΝΑ",
  "ΠΤΗΝΟ",
  "ΠΤΗΣΗ",
  "ΠΤΥΧΗ",
  "ΠΤΩΜΑ",
  "ΠΤΩΣΗ",
  "ΠΥΘΙΑ",
  "ΠΥΚΝΑ",
  "ΠΥΚΝΗ",
  "ΠΥΚΝΟ",
  "ΠΥΛΕΣ",
  "ΠΥΛΗΣ",
  "ΠΥΛΩΝ",
  "ΠΥΡΓΙ",
  "ΠΥΡΓΟ",
  "ΠΥΡΟΣ",
  "ΠΥΡΡΟ",
  "ΠΥΡΩΝ",
  "ΠΩΛΕΙ",
  "ΡΑΒΔΙ",
  "ΡΑΒΔΟ",
  "ΡΑΓΕΣ",
  "ΡΑΔΙΟ",
  "ΡΑΤΣΑ",
  "ΡΑΦΙΑ",
  "ΡΑΧΕΣ",
  "ΡΑΧΗΣ",
  "ΡΑΧΩΝ",
  "ΡΕΙΚΙ",
  "ΡΕΚΟΡ",
  "ΡΕΟΥΝ",
  "ΡΕΤΡΟ",
  "ΡΕΥΜΑ",
  "ΡΗΓΜΑ",
  "ΡΗΞΗΣ",
  "ΡΗΤΡΑ",
  "ΡΗΤΩΝ",
  "ΡΙΓΑΣ",
  "ΡΙΓΕΣ",
  "ΡΙΖΑΣ",
  "ΡΙΖΕΣ",
  "ΡΙΖΩΝ",
  "ΡΙΝΓΚ",
  "ΡΙΞΕΙ",
  "ΡΙΣΚΟ",
  "ΡΙΧΤΟ",
  "ΡΙΨΗΣ",
  "ΡΟΔΕΣ",
  "ΡΟΔΙΑ",
  "ΡΟΔΙΟ",
  "ΡΟΔΩΝ",
  "ΡΟΚΑΣ",
  "ΡΟΛΟΙ",
  "ΡΟΛΟΣ",
  "ΡΟΛΟΥ",
  "ΡΟΛΩΝ",
  "ΡΟΠΗΣ",
  "ΡΟΥΛΑ",
  "ΡΟΥΜΙ",
  "ΡΟΥΣΕ",
  "ΡΟΥΣΟ",
  "ΡΟΥΧΑ",
  "ΡΟΥΧΟ",
  "ΡΥΑΚΙ",
  "ΡΥΘΜΟ",
  "ΡΥΠΩΝ",
  "ΡΩΤΑΣ",
  "ΡΩΤΑΩ",
  "ΣΑΙΝΤ",
  "ΣΑΛΑΣ",
  "ΣΑΜΠΑ",
  "ΣΑΜΠΙ",
  "ΣΑΜΠΟ",
  "ΣΑΠΩΝ",
  "ΣΑΡΑΙ",
  "ΣΑΡΙΑ",
  "ΣΑΡΚΑ",
  "ΣΑΥΡΑ",
  "ΣΑΦΕΣ",
  "ΣΑΦΗΣ",
  "ΣΑΦΩΣ",
  "ΣΑΧΗΣ",
  "ΣΕΖΟΝ",
  "ΣΕΙΡΑ",
  "ΣΕΙΧΗ",
  "ΣΕΛΑΣ",
  "ΣΕΛΕΡ",
  "ΣΕΛΛΑ",
  "ΣΕΛΜΑ",
  "ΣΙΓΜΑ",
  "ΣΙΜΟΣ",
  "ΣΙΜΟΥ",
  "ΣΙΜΩΝ",
  "ΣΙΤΟΥ",
  "ΣΙΩΠΗ",
  "ΣΚΑΕΙ",
  "ΣΚΑΚΙ",
  "ΣΚΑΛΑ",
  "ΣΚΑΦΗ",
  "ΣΚΕΛΗ",
  "ΣΚΕΠΗ",
  "ΣΚΕΤΑ",
  "ΣΚΕΤΟ",
  "ΣΚΕΤΣ",
  "ΣΚΕΥΗ",
  "ΣΚΕΨΗ",
  "ΣΚΗΝΗ",
  "ΣΚΗΤΗ",
  "ΣΚΙΑΣ",
  "ΣΚΙΕΣ",
  "ΣΚΙΩΝ",
  "ΣΚΟΝΗ",
  "ΣΚΟΠΟ",
  "ΣΚΥΛΙ",
  "ΣΚΥΛΟ",
  "ΣΚΥΡΟ",
  "ΣΜΗΝΗ",
  "ΣΟΓΙΑ",
  "ΣΟΟΥΛ",
  "ΣΟΡΟΣ",
  "ΣΟΡΤΣ",
  "ΣΟΥΔΑ",
  "ΣΟΥΠΑ",
  "ΣΟΥΡΑ",
  "ΣΟΦΙΑ",
  "ΣΟΦΟΙ",
  "ΣΟΦΟΣ",
  "ΣΟΦΟΥ",
  "ΣΟΦΩΝ",
  "ΣΠΑΕΙ",
  "ΣΠΑΘΗ",
  "ΣΠΑΘΙ",
  "ΣΠΙΘΑ",
  "ΣΠΙΤΙ",
  "ΣΠΟΡΑ",
  "ΣΠΟΡΟ",
  "ΣΤΑΝΤ",
  "ΣΤΑΡΑ",
  "ΣΤΑΡΙ",
  "ΣΤΑΣΗ",
  "ΣΤΕΓΗ",
  "ΣΤΕΝΑ",
  "ΣΤΕΝΗ",
  "ΣΤΕΝΟ",
  "ΣΤΕΠΑ",
  "ΣΤΕΨΗ",
  "ΣΤΗΛΗ",
  "ΣΤΙΒΟ",
  "ΣΤΙΧΟ",
  "ΣΤΟΑΣ",
  "ΣΤΟΕΣ",
  "ΣΤΟΛΗ",
  "ΣΤΟΛΟ",
  "ΣΤΟΜΑ",
  "ΣΤΟΡΙ",
  "ΣΤΟΥΣ",
  "ΣΤΟΧΟ",
  "ΣΤΡΕΣ",
  "ΣΤΥΛΟ",
  "ΣΥΚΙΑ",
  "ΣΥΡΙΑ",
  "ΣΥΡΜΑ",
  "ΣΥΡΟΥ",
  "ΣΥΧΝΑ",
  "ΣΥΧΝΗ",
  "ΣΥΧΝΟ",
  "ΣΦΑΓΗ",
  "ΣΦΗΚΑ",
  "ΣΦΥΡΑ",
  "ΣΦΥΡΙ",
  "ΣΧΑΣΗ",
  "ΣΧΕΣΗ",
  "ΣΧΗΜΑ",
  "ΣΧΟΛΗ",
  "ΣΩΖΕΙ",
  "ΣΩΘΕΙ",
  "ΣΩΡΟΣ",
  "ΣΩΣΕΙ",
  "ΣΩΣΤΑ",
  "ΣΩΣΤΗ",
  "ΣΩΣΤΟ",
  "ΣΩΤΗΡ",
  "ΤΑΒΛΙ",
  "ΤΑΓΚΟ",
  "ΤΑΓΜΑ",
  "ΤΑΙΡΙ",
  "ΤΑΚΤΑ",
  "ΤΑΝΚΣ",
  "ΤΑΞΕΙ",
  "ΤΑΞΗΣ",
  "ΤΑΞΙΣ",
  "ΤΑΠΕΣ",
  "ΤΑΡΑΣ",
  "ΤΑΡΣΟ",
  "ΤΑΣΗΣ",
  "ΤΑΥΡΟ",
  "ΤΑΥΤΑ",
  "ΤΑΦΕΙ",
  "ΤΑΦΕΣ",
  "ΤΑΦΗΣ",
  "ΤΑΦΟΙ",
  "ΤΑΦΟΣ",
  "ΤΑΦΟΥ",
  "ΤΑΦΡΟ",
  "ΤΑΦΩΝ",
  "ΤΕΘΕΙ",
  "ΤΕΙΧΗ",
  "ΤΕΚΕΣ",
  "ΤΕΚΝΑ",
  "ΤΕΚΝΟ",
  "ΤΕΛΕΙ",
  "ΤΕΛΟΣ",
  "ΤΕΛΩΝ",
  "ΤΕΜΠΟ",
  "ΤΕΝΙΣ",
  "ΤΕΝΤΑ",
  "ΤΕΡΑΣ",
  "ΤΕΡΜΑ",
  "ΤΕΥΧΗ",
  "ΤΕΦΡΑ",
  "ΤΕΧΝΗ",
  "ΤΖΑΚΙ",
  "ΤΖΑΜΙ",
  "ΤΖΙΝΙ",
  "ΤΗΞΗΣ",
  "ΤΗΡΕΙ",
  "ΤΙΓΡΗ",
  "ΤΙΜΕΣ",
  "ΤΙΜΗΝ",
  "ΤΙΜΗΣ",
  "ΤΙΜΙΑ",
  "ΤΙΜΙΟ",
  "ΤΙΜΩΝ",
  "ΤΙΝΟΣ",
  "ΤΙΤΛΟ",
  "ΤΜΗΜΑ",
  "ΤΟΙΧΟ",
  "ΤΟΛΜΗ",
  "ΤΟΜΕΑ",
  "ΤΟΜΕΣ",
  "ΤΟΜΗΣ",
  "ΤΟΜΟΙ",
  "ΤΟΜΟΣ",
  "ΤΟΜΟΥ",
  "ΤΟΜΩΝ",
  "ΤΟΝΟΙ",
  "ΤΟΝΟΣ",
  "ΤΟΝΟΥ",
  "ΤΟΝΩΝ",
  "ΤΟΞΟΥ",
  "ΤΟΞΩΝ",
  "ΤΟΠΙΑ",
  "ΤΟΠΙΟ",
  "ΤΟΠΟΙ",
  "ΤΟΠΟΝ",
  "ΤΟΠΟΣ",
  "ΤΟΠΟΥ",
  "ΤΟΠΩΝ",
  "ΤΟΣΕΣ",
  "ΤΟΣΟΙ",
  "ΤΟΥΤΗ",
  "ΤΟΥΤΟ",
  "ΤΡΑΒΑ",
  "ΤΡΑΣΤ",
  "ΤΡΑΧΥ",
  "ΤΡΕΙΣ",
  "ΤΡΕΛΑ",
  "ΤΡΕΛΗ",
  "ΤΡΕΛΟ",
  "ΤΡΕΝΑ",
  "ΤΡΕΝΟ",
  "ΤΡΙΑΣ",
  "ΤΡΙΒΗ",
  "ΤΡΙΤΑ",
  "ΤΡΙΤΗ",
  "ΤΡΙΤΟ",
  "ΤΡΙΧΑ",
  "ΤΡΙΩΝ",
  "ΤΡΟΜΟ",
  "ΤΡΟΠΗ",
  "ΤΡΟΠΟ",
  "ΤΡΟΦΗ",
  "ΤΡΟΧΟ",
  "ΤΡΥΠΑ",
  "ΤΡΥΦΩ",
  "ΤΡΩΕΙ",
  "ΤΡΩΝΕ",
  "ΤΣΑΡΟ",
  "ΤΣΕΛΟ",
  "ΤΣΕΡΙ",
  "ΤΥΜΒΟ",
  "ΤΥΠΟΙ",
  "ΤΥΠΟΣ",
  "ΤΥΠΟΥ",
  "ΤΥΠΩΝ",
  "ΤΥΡΙΑ",
  "ΤΥΡΟΣ",
  "ΤΥΡΟΥ",
  "ΤΥΦΛΑ",
  "ΤΥΦΛΗ",
  "ΤΥΦΛΟ",
  "ΤΥΦΩΝ",
  "ΤΥΧΕΙ",
  "ΤΥΧΕΣ",
  "ΤΥΧΗΣ",
  "ΤΥΧΟΝ",
  "ΥΑΙΝΑ",
  "ΥΓΕΙΑ",
  "ΥΓΙΕΣ",
  "ΥΓΙΗΣ",
  "ΥΓΡΕΣ",
  "ΥΓΡΟΣ",
  "ΥΓΡΟΥ",
  "ΥΓΡΩΝ",
  "ΥΔΑΤΑ",
  "ΥΔΡΙΑ",
  "ΥΙΟΥΣ",
  "ΥΛΙΚΑ",
  "ΥΛΙΚΗ",
  "ΥΛΙΚΟ",
  "ΥΜΝΟΙ",
  "ΥΜΝΟΣ",
  "ΥΜΝΟΥ",
  "ΥΜΝΩΝ",
  "ΥΠΑΤΗ",
  "ΥΠΑΤΟ",
  "ΥΠΝΟΣ",
  "ΥΠΝΟΥ",
  "ΥΠΟΨΗ",
  "ΥΠΤΙΟ",
  "ΥΦΑΛΟ",
  "ΥΦΕΣΗ",
  "ΥΦΟΥΣ",
  "ΥΨΗΛΑ",
  "ΥΨΗΛΗ",
  "ΥΨΗΛΟ",
  "ΥΨΟΥΣ",
  "ΥΨΩΜΑ",
  "ΥΨΩΝΑ",
  "ΥΨΩΣΕ",
  "ΥΨΩΣΗ",
  "ΦΑΚΕΣ",
  "ΦΑΚΟΙ",
  "ΦΑΚΟΣ",
  "ΦΑΚΟΥ",
  "ΦΑΚΩΝ",
  "ΦΑΝΕΙ",
  "ΦΑΝΟΣ",
  "ΦΑΟΥΛ",
  "ΦΑΡΔΥ",
  "ΦΑΡΕΣ",
  "ΦΑΡΜΑ",
  "ΦΑΡΟΣ",
  "ΦΑΡΟΥ",
  "ΦΑΡΣΑ",
  "ΦΑΡΩΝ",
  "ΦΑΣΗΣ",
  "ΦΑΣΜΑ",
  "ΦΕΞΗΣ",
  "ΦΕΡΑΝ",
  "ΦΕΡΕΙ",
  "ΦΕΡΩΝ",
  "ΦΕΤΕΣ",
  "ΦΕΤΟΣ",
  "ΦΗΜΕΣ",
  "ΦΗΜΗΣ",
  "ΦΘΟΡΑ",
  "ΦΙΑΛΗ",
  "ΦΙΔΙΑ",
  "ΦΙΛΕΣ",
  "ΦΙΛΗΣ",
  "ΦΙΛΙΑ",
  "ΦΙΛΟΙ",
  "ΦΙΛΟΣ",
  "ΦΙΛΟΥ",
  "ΦΙΛΩΝ",
  "ΦΙΝΟΣ",
  "ΦΙΟΡΔ",
  "ΦΛΕΒΑ",
  "ΦΛΕΡΤ",
  "ΦΛΟΓΑ",
  "ΦΛΟΙΟ",
  "ΦΟΒΟΙ",
  "ΦΟΒΟΣ",
  "ΦΟΒΟΥ",
  "ΦΟΝΟΣ",
  "ΦΟΝΟΥ",
  "ΦΟΝΤΑ",
  "ΦΟΝΤΟ",
  "ΦΟΡΑΣ",
  "ΦΟΡΕΑ",
  "ΦΟΡΕΣ",
  "ΦΟΡΜΑ",
  "ΦΟΡΟΙ",
  "ΦΟΡΟΣ",
  "ΦΟΡΟΥ",
  "ΦΟΡΤΟ",
  "ΦΟΡΩΝ",
  "ΦΡΑΓΗ",
  "ΦΡΑΣΗ",
  "ΦΡΕΝΑ",
  "ΦΡΙΚΗ",
  "ΦΤΕΡΑ",
  "ΦΤΕΡΗ",
  "ΦΤΕΡΟ",
  "ΦΤΩΧΑ",
  "ΦΤΩΧΗ",
  "ΦΤΩΧΟ",
  "ΦΥΓΑΣ",
  "ΦΥΓΕΙ",
  "ΦΥΓΗΣ",
  "ΦΥΚΙΑ",
  "ΦΥΛΕΣ",
  "ΦΥΛΗΣ",
  "ΦΥΛΛΑ",
  "ΦΥΛΛΟ",
  "ΦΥΛΟΥ",
  "ΦΥΛΩΝ",
  "ΦΥΣΗΣ",
  "ΦΥΤΟΥ",
  "ΦΥΤΩΝ",
  "ΦΩΚΙΑ",
  "ΦΩΛΙΑ",
  "ΦΩΝΕΣ",
  "ΦΩΝΗΣ",
  "ΦΩΝΩΝ",
  "ΦΩΤΙΑ",
  "ΦΩΤΟΣ",
  "ΦΩΤΩΝ",
  "ΧΑΘΕΙ",
  "ΧΑΙΡΕ",
  "ΧΑΛΙΑ",
  "ΧΑΛΚΟ",
  "ΧΑΜΑΜ",
  "ΧΑΝΕΙ",
  "ΧΑΝΙΑ",
  "ΧΑΝΟΣ",
  "ΧΑΝΟΥ",
  "ΧΑΟΥΣ",
  "ΧΑΠΙΑ",
  "ΧΑΡΑΣ",
  "ΧΑΡΕΣ",
  "ΧΑΡΗΣ",
  "ΧΑΡΙΝ",
  "ΧΑΡΙΣ",
  "ΧΑΡΤΑ",
  "ΧΑΡΤΗ",
  "ΧΑΡΤΙ",
  "ΧΑΡΩΝ",
  "ΧΑΣΕΙ",
  "ΧΑΣΜΑ",
  "ΧΑΤΖΗ",
  "ΧΕΙΛΗ",
  "ΧΕΙΛΙ",
  "ΧΕΡΙΑ",
  "ΧΗΡΑΣ",
  "ΧΗΡΕΣ",
  "ΧΗΡΟΣ",
  "ΧΙΛΙΑ",
  "ΧΙΟΝΙ",
  "ΧΟΚΕΙ",
  "ΧΟΜΠΙ",
  "ΧΟΡΔΗ",
  "ΧΟΡΟΙ",
  "ΧΟΡΟΣ",
  "ΧΟΡΟΥ",
  "ΧΟΡΤΑ",
  "ΧΟΡΤΟ",
  "ΧΟΡΩΝ",
  "ΧΟΤΖΑ",
  "ΧΡΕΟΣ",
  "ΧΡΕΩΝ",
  "ΧΡΗΜΑ",
  "ΧΡΗΣΗ",
  "ΧΡΟΙΑ",
  "ΧΡΟΝΟ",
  "ΧΡΥΣΑ",
  "ΧΡΥΣΗ",
  "ΧΡΥΣΟ",
  "ΧΡΩΜΑ",
  "ΧΡΩΣΗ",
  "ΧΤΥΠΑ",
  "ΧΥΜΟΣ",
  "ΧΩΡΑΝ",
  "ΧΩΡΑΣ",
  "ΧΩΡΕΣ",
  "ΧΩΡΙΑ",
  "ΧΩΡΙΟ",
  "ΧΩΡΙΣ",
  "ΧΩΡΟΙ",
  "ΧΩΡΟΣ",
  "ΧΩΡΟΥ",
  "ΧΩΡΩΝ",
  "ΨΑΘΑΣ",
  "ΨΑΞΕΙ",
  "ΨΑΡΑΣ",
  "ΨΑΡΙΑ",
  "ΨΑΡΩΝ",
  "ΨΑΧΝΩ",
  "ΨΕΥΔΗ",
  "ΨΕΥΔΟ",
  "ΨΗΛΕΣ",
  "ΨΗΛΟΣ",
  "ΨΗΦΙΑ",
  "ΨΗΦΙΟ",
  "ΨΗΦΟΙ",
  "ΨΗΦΟΣ",
  "ΨΗΦΟΥ",
  "ΨΗΦΩΝ",
  "ΨΥΞΗΣ",
  "ΨΥΧΕΣ",
  "ΨΥΧΗΣ",
  "ΨΥΧΟΣ",
  "ΨΥΧΡΑ",
  "ΨΥΧΡΗ",
  "ΨΥΧΡΟ",
  "ΨΥΧΩΝ",
  "ΨΩΜΙΑ",
  "ΩΑΡΙΟ",
  "ΩΔΕΙΟ",
  "ΩΘΗΣΕ",
  "ΩΘΗΣΗ",
  "ΩΜΕΓΑ",
  "ΩΜΟΥΣ",
  "ΩΡΑΙΑ",
  "ΩΡΑΙΟ",
  "ΩΡΙΜΑ",
  "ΩΡΙΜΗ",
  "ΩΡΙΜΟ",
  "ΩΣΠΟΥ",
]

export default answers
