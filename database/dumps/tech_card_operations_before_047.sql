PGDMP     3        
        	    z            ots_test    14.5    14.5     Z           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            [           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            \           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ]           1262    171342    ots_test    DATABASE     e   CREATE DATABASE ots_test WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE ots_test;
                postgres    false                       1259    174173    technical-card-operation    TABLE     b  CREATE TABLE public."technical-card-operation" (
    "technicalCardId" integer NOT NULL,
    id integer NOT NULL,
    "workType" character varying(255) NOT NULL,
    "operationTitle" text NOT NULL,
    "categoryExecutor" text,
    "laborCosts" text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 .   DROP TABLE public."technical-card-operation";
       public         heap    postgres    false                       1259    174172    technical-card-operation_id_seq    SEQUENCE     �   CREATE SEQUENCE public."technical-card-operation_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public."technical-card-operation_id_seq";
       public          postgres    false    264            ^           0    0    technical-card-operation_id_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public."technical-card-operation_id_seq" OWNED BY public."technical-card-operation".id;
          public          postgres    false    263            �           2604    174176    technical-card-operation id    DEFAULT     �   ALTER TABLE ONLY public."technical-card-operation" ALTER COLUMN id SET DEFAULT nextval('public."technical-card-operation_id_seq"'::regclass);
 L   ALTER TABLE public."technical-card-operation" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    263    264    264            W          0    174173    technical-card-operation 
   TABLE DATA           �   COPY public."technical-card-operation" ("technicalCardId", id, "workType", "operationTitle", "categoryExecutor", "laborCosts", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    264   S       _           0    0    technical-card-operation_id_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public."technical-card-operation_id_seq"', 503, true);
          public          postgres    false    263            �           2606    174180 6   technical-card-operation technical-card-operation_pkey 
   CONSTRAINT     x   ALTER TABLE ONLY public."technical-card-operation"
    ADD CONSTRAINT "technical-card-operation_pkey" PRIMARY KEY (id);
 d   ALTER TABLE ONLY public."technical-card-operation" DROP CONSTRAINT "technical-card-operation_pkey";
       public            postgres    false    264            �           2606    174181 F   technical-card-operation technical-card-operation_technicalCardId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."technical-card-operation"
    ADD CONSTRAINT "technical-card-operation_technicalCardId_fkey" FOREIGN KEY ("technicalCardId") REFERENCES public."technical-card"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 t   ALTER TABLE ONLY public."technical-card-operation" DROP CONSTRAINT "technical-card-operation_technicalCardId_fkey";
       public          postgres    false    264            W      x��}O�I�߹�Ss��������d_�a<�o{2|����g���yZ,������۳�V�8�Z�-�������U$+�ٙUd��ݑ�$�2222����΂�����Xޔ���O��R�wQ~Y���_�+�Ջ����W�ԧ�_��꿷�լ�W�_ԗު����_˫ե�����;W�r�~�R}���Uy��N�}�?�0[����?�E�\�O���L����\�V�r�����5��_���UO���o��~Q��U��
�~����j�5��s�����Ȣ�h~�J��Sy_0V��	�ӿ�3"��Ի�߯�Y�������>�x�"���H�Vo����?T��U��ӯQ���lk	aa�\�Ü˿��@�ݨ��Kt�_����O��_տ��������t�t�;~k�J��[=߳���,������ �����gI���y�1t���r�<���$?�7�����Y���@� <5=-$�텒��ի��>j���װޟ�/����A��������/�w���Z��dVof�'�B������X��/�6��A�v�w՟�L�ԖT���T)���Ꝅ�T������:�^�}P	O?�UM
_4D@�^�Z}�=l�����>�l�7F�o՟/��؟����%�?�	mýyO�ͯ��hǨ�W��{�z���;�;�/4�{x����Z���j�`��TKQ�+l��/�N���~ד2�@�&�M���i��R���u��~�X=� �ߚ}��?���~�v�������?��iU@���췿�����jޠt0w�����QZ�o+�.ﶵ��v(mZ��_`�K�*����ݪ}v�e�?���$2�� xK�YM~|��e��?�3�uz�|�����_��R��{<���RW��W�3^�W���Â7��h8c�*�ke"�r���Y��0p�vQ�������Yc��O9a���,bo_�+�_�olTF!���Z��+m-4�O��0V�j�i��Ӌm�f���������J-oMo~��\����-�[�x��x���&����Au��ڭ+2Z��M�m���W��|[���O=���V0�Rc :P����D$/�ŗ���/;�����H�i8�`�>�`������(|i��ri�!zrg��Y���6����-����V,�].a'7���f�c����g�;�Sf�&����N([*p�� hQ��j�K��E���T���{���L���DOW;�J~6��){��/����M
3\���稗x�o�v,���?���_�W����gX�'^����@ 6#���R�y��FR�'ڬ�m���Q�]Vq�����+4>7���������ߪ�Cז����[���|���o�?/�8�:�.;
l�_��B���`�j�6S*��v�����c�o�:	>�w�|qe��������"�/p�\ڪsẂA������aƖٛ�[��;���wMh�:���~bh�Ƽ��ê�Z��4����xcNk5`�CsF�BЁ����p=�L�	��xÆ@,S��WO�����3%�ŗ��z
�r#��6�G5��s�^����  |��U=����7^�(t��yxxG]�.���'�z�&*3��
�)����z�	���������oc�Q��A>3#�!-�G�Ͻ���b��^�L�O�NX�/�"�����c3qK(lB�g��0t��;����}@,U�j��Ͷ�bM�ߎv��?��~��qb4�zOA   ��?�[��S��&䔋�YaH�1p�YyO�yS+ͺ+� ��8>-��m2�;�����MB�御����H's|18e#wN5y4
����Q.j�o@�)<�F��Tv��B�������Od<��HW��B0n�����S" r|��s5��	 @C������y�B �P GA�X��t(���d`H�#�p|@�CI0�ֿ�n�@���F~�c��sx
�f�P؄(���aHK%>�h~~���}�@?����^YQ�||hbO%_Z�R�|��z�B	TZ��
~E�@�TZ�:0�ŗO	,-�:�Ϣ�4���J����<JC���(�~A+a�*ia�ld�Yq�C��fa�!Y�}c���L���dq�t�N8���ߠd|8d:gC������CZI%=�Td�L�t�F�8��h��c����-�!-!Ǟ��ܑ���Y~���]��H&�����D�Q�D�����������N�	��s6Y����Ԍ$��
�'g�4#�\�s�Ӏ�da�<?�,���\���2������'�D|�CںI�!�<�p��a�!ikxdMo<`eiHϛ#$��-�!�����L�NSP9MS�y�<HCz�'��&xD	��TR˞7�Lx���k7IyT�<<*ߞ�<�	CZ���NA�ki�(k`P�4T�C�6�����،��9��,���FPyA�k�
y����y�Â�
V*X�`���Jm��7�t4Xi��#a��CB���+�`�Ͳz�Vn���H_�c�0��sKLkBH��T{�J�oG�o���0��ǖ"c��m1�h� 5"GX� �z�>��J�տ�W{�N0ʑb�9�xt���pn�+�����80J�2�t��snk2F�2�!m:/β�Yb�(O����a�:'�`��R ��C�1�Ð�������h`��<�CZ��1ʘ��aH/�p�`�?�3��%����o(o�G�0�'n��M���-6�[���w��1OV����eg���97���S4�)���^�F����p����0y� 1�A��/�8PM��˄�1�*�(�k�p0?+��A\Sp͆fuI�tޱ� �l
�y8`J�-��z�[�����P[��3|�C`�e� O �й�G\�GJzo�@}��<2�!+�R�#�g��gG
0� k�����\���|� �>W�T`���;��1������Ҏޥ�����>���Y=�Y���F�V���H��!�z�u�/)r#GE�|l�fF~��w�yl}�G?iNS��-g�C��c��&�ҶUu(^=qmSv9�{��F��&�m�
^�-=��]�t��ߪ//Z<`E��UDF�!J[WՒ_b���a�ܲ��r4���X�7�,���vε�M�nI�G9�̏�OI�!����i{�m���m�
�F��6B￱;r8�c%~�J7TB}�����
���ZN�����X�ݻ!�% �C;�D�<��O��BZ���m���;Ю;�С��d<\�!\*AHᝐ}��g)i���	K ,���Z),��������'Tӗ�`��@������=d�Y9n� �1¬ N���W�Zs��B�Q�Ƿ�9��������H�\�}�8.S�y`%'`%8����d$���#2� ��~*��_8��l�$X������d���7	����yBⷿ(�lx,�Q��P�po����y�,G�,R��k��+���4>"In���Y��p��}��"
�(,�V
�h{N�`��=���}XĂ����"w�!�X�0B����q�d���u���	M}8~Q{ �$v*<�i����]�U�JA�Js�Q��F��fRt$|�����#vs�[�dzS�k��,n�C(~��U�p-�s-ٜ�q�^i�%C�C6gCB��n\��B.��V
BnkfY ��̞N;�l���2H?.A�E��6�bG�l�V��N}��cR(2(��7��(E'>�~RVR��&u�E"Y�!�Z��m�&Q$�<rr;�0'E"E"Y�&:�����;)�b�E"Y�&'����ܓ�o��N����B\O\<� ���E��j�B���j�vPTZ�عF���o	q!ąS!.��:$#;�=�c�-l�1\)!-#-BgZZ�ߩ��[
пG�Y���*�f�?sKX��>!|���%�9!�'��0&�X6�:i��N����:b�cb~Bz
	zJ{T	����X�>��j�G��3?!��������6_[��N�'���o�i��gx��n��˼��`�\��n    �@�_T����4��%P_����
G��
'�Q����P�Q�pc'ʍ%J��Q�o�B�����1a������Y.cۜ���� ��s�Y�yv�!�p]�����z��Wy��t]�_�~0V�H�-˨1���=����ί~�G`��c�c8-�e����6&2�hckC8E˲���1�7M�P��w�h`}ۻP5V2Ș��Ѷ�!�����͙�o��4-��6�9�Dmqc�˾��#�>��$�6��
�r����j��'1'�YP�R3-=j�ɯ1t�J��;�
 +�l�Z<�����C�X�c�=8���-$8Z�pl=�w�Cm�\��a��:$,4�h#&>�LB��~�{?2�+x`)�'tM�����h�,�{�GДt�\�s出��-�ڼ>&�r�D0�F0<��ur���0�L9���K�ɟ��!}7��I��e�@�F�#L(I��-iiG|#�>JR>$K#��n?3��)�4��>�C�l�X���䔔��ӄ�h�3�䔐�A��P��{�9L�S&����Y�iF�5�+�<����2R�2
�T��@�;g�jf�� �`��`��0�Z'�<4(ȟ ��M�����!��`�k�
d���`��_�{�Y�q���ʄvb�"�zyZ4���:]�N�l(�|�/ �W� ���s�}d�� 0��F3�j��+����[��?7�����������j�R���ùDI����1���蟽���im�I��7�y�8�H��W�ALm���zi�B��9i���Z#Ns�;�!��)�1e&�0�r�e������y���eZ�j/���v�@3e�Y�!���MQ� �s��!���EO��J�i��9\5�"���� *��;[�I��"����R�t쉱�y�3�K�	��x1���<�C(>盝�^�Z{6��h ?����MJoN���EZ��oE�Z�,B�l��;����Л{�W�40�B6_�t�Pm�7MP���+�!&m���|�A�ҍ���%��p1'��i`��v�=�]�[���W�m |ĊL�������T��v,k@aL�
��?9��#��c�b_�}�g�B�_v��ϕ�ށӈ�/�߱�ZUѱf��;�#0_ସ�s�y �5�~W�0V'�X|�C�Q|%��qRG;ϟ��hw��	�'��0~������y��=���x���*��2�mZ����<�]$���ͅ�Ư�1�"%]�Xm��_�c=EFS?�����y��I.=�/�Fj5�����_��FB2�a|�G���D�����>�ҷS��-d$���(��5l�-�/O�6�d �J�����{\w�nF,�y�ׯ���l�����5�ga�����V�ƫpm��)��n[
н߸�ۏW�9��йZ�0��~����p��f8tgaMFF���0Z[f;@����D��_�;w`�Г#?[�Na+h7tK��Mf����Q]��/8�&��E"������5�^�z!ꅨQ�YV��ت`dD��@�������,(�C���U]�J�?��G�5ç
kf�ɏ���<hq���zO�-�0g@�l7R<:�R���6G!ś���M�Ŧ�]��������Ä���y^����߾����u�������킸ڊ&�l �s!i�뽝Ӡ�À#�j�_49Z�Ό �������������V�]<�5*6�.wl����ız\�:����p%o��&�
��p�L��?�B;�O=[�N|�̒� �
6�
3;��٫�������T���粢��U�UG��]z(�9ܚK`�����FH������m��%pa�X���;��K�T<:��8K��៑sG��'��]�����FI:�ׄ��v�������⃜g�w@Mt�Ľw	�|��η	yD*I����4I��4I�I�Eȃ�aD�л��x�,Bzc�pE�f1X�����gx{�Y �� !��ʇ5�`D��� Y��lY�W�a�B�TPGČ�����$W�1�y�B�1�H�߭R�>lQ�saB���]JcH�yx6Li�5�J����e-�I�YPx�n@.��=ť�<�f�����a�Q��<���X֖O#}��iɥM,S�$y�E�\�@�'�EI��&TI��='D<ZZ�8:O=y�N|�e�Mw]�$y�p��v������\���vt�lEh�Ǉ���EqEk�1���^��Y�f3�����ާMxG|�I���xŭ�Bx�-��HK���w���޼�W�H��Z�����Gc〖�?�r/]\�������4�cËC�"���}txr�n���G�r�}�qd�g�e��I��4���沥��"�u�}T��z�d�|^U���k��I�b�c>)NI��y];���k;SXta�{f��ٹ�|�,z��1��{᫰�¢[��7�<�9�O��y�2&�2s�tEX�����{�ޱ�=�ށ�Cӹ�aF>q$�h,}fT�QaF�	3��X�=��|=f4���$%�W/*��`�h���IFK;�m+�>�MC
lB�O��7P�|kw���];��s۹��[>TLrZ���$�@8&|��4u�UB�x�p8Yf�j��7��Ʒmߪp�Fm<�`Ynw��@O<���O�_���B�Y����߲�tB쯅T�=�d��N�}�h|���j���y��7��_���M�$�4 y9����&����9h��t��T�B�4^|4�yktd���_�������{��t�9޺$��ζ������H[_��:���t�ϏIC�m盌���؉o��n�R�F����f������$�=���4�Μ�}�F�R�sHL:����`�!���LZ0��c�v�p�[�ǆI�<p�f$tL0�c�;o ���(��ϟY��MC�/�%�YQ��e���mqP�9�Pm�+��/�[W!����^����_�v�)�jW��&����a[N=;pmW�.*�M��p_�����:� �m?�fO�!���^:�5}i�i�?m��ެ��v�m�������������71k���ұW�VH�NfGV�%�g<��$$���<����x�(I�X�hOJ�%sJ˃m��߹	־���6����m�i㤇=�8��b�Ր���!��h�ً�h�)�IU8�����E%>�?�ƹmו[�)�[7"�l�B�v�����8��=��O����h��'������� 7�I����n�=}p;���`��	���χ�x��Ҋ���G�`�����f&e����'���˃�L'��2im����s!"�)�C"$|��1�(X�03�A�Pn%�YA�^�p�ݤ��5�1;©O����X�j&eE���J��`K/2"�ymm����]@I~��JӤ&�L�l���	0�%nS������Z[QC1�v9�O�*�����ăPyLBrl/%�Q}d'�~�K	}$�Qo��`*�;q���6��ȝ=�?�8�g�.�����|R&�G�Y�5�	{�P--��:oI�#a��=����=��am�����l���˭�`��@����������ֿW���pG��DA��w�Yy̏�����n��!uĵ����#�)r�Y�r��-[U������{:�>4�#�G.x`�HH�����!�X ,'���E�-�P��?'JPTAQI�X�)�s�3����X��FJ`Y�e�X���жp�;1F+Gs}�!�p� �C�ќq�v���,�X���c�;���r4���6�� �F��Yt�P.����<�d)yˮ��+�<\9���2�RG�P�p�h��8��r��r�r4g;���|���Rp���)e���j�\�) ����ND���˄����e�@���4���4�H�_Z M�Ա �1���H*�"X�7?����!]8��p�h]©zdzĮWR�N��4� I��HF�H�x� �L�o{e��]��ff���J��ڎ �  8_Z9B([zm؄}�G����!T�X��0��{Ԧ;^���{ћ��'�3rh�n�[��0_�|�G���C��R��g:��
��&�����]NK�})�����=� ��ߡ��a~<bg:��[b�Ɋ֓��RK���K����5��-(�!Pd���R;�#đ}��Na%JX�W(	
x�( Ӡ��P��zPP@AG�|�Q��=��ڱ��� &@d8�HP��P������6�.NAǐ��$o� �w�;8��sʖ ��~m� x6g:����~�I��%�{gR�V-�P�,��dR�����H�����e�FVC(z��+%�[��}��Zi�����s6!<^�]�N0Q������붒_�����#�NC�T�:��(��c������ƴ��kbi7ueK3o�RxJ�)����y@���TF��k��^�<*�RO�C�@��!�ӳw�'��� ����Wa)�Q�`���4���x:�h������
z�|P�A�%>/�����ki�u��vQG�Z<���9^� �ek0)�����va-���/k0)���s>���/"�a�u�!��ܫ�QvO�5y2�{�B~�|���~rC��BM0}�����z�<�F$�Ӻ&���aBr>^'��^#��|�%�����{7%v��'�d)m�!�0��{��S��?�H ��c7��QE�!���J�Ӌf%��1x��#QLZw$1�N��H|��4��W���W�ZcX�k��%�Ȼ_+xB�w�?QB���#Lы�p%Jii�[�`�pj�G*QFs?R@ɦ~�B���z�Zܖg��x�@]y�8pv>i�-
Eu(�o��Wm-��܃l�
������%�V�#ȝk�����	)�xbR-"���
�%�3�ҴpDca4��oe�`�rY���0�?Z���_)�=8��6=m'�5��	U�j���y��P�j�vs���E��
�j<?�罷�?8V4�%�-���$h`ԥ-�x|Y�8�KMS���n}�?�g*�R�
Ar��w����͢����A�;�W�7��"���ub��!\�I���<�C8��J��6�!��%8M�A�#�(�1B�>�'Q'��"�7w,��Q�YJ ?c��aEŀk:�z�l�R�H����km��de�>\�'^�rG���AWt��L_UO��
�õ����j��L�#30��{<2C^�b;��d��4�wO��\S��=l:�+t��ihv�D/a5��#wm��V��6�<ڍ�TfѮ��c1��B[�z+���L�+��S`����;.�+�/v���2���ޱ
�6
m-֚Y�oeC�qpČ�Ix�8�i�����~hM�����"��@��@Gu�/>�IR2^c�:�Y@�ͣvA&|�d$����Íh߀���~�����櫾ȹrHQ^� �5n2d���0�C�q4��il��7zV��������^���T>�HrZlb����$��N �-�s��C�nf��&��>O��æ�Z��O0����������,��x�>���|�h�x���w��)kĠ.�R/�S������l��3=]>M
Z�i�y��b},��A�=���%�f�3]����;c�o �61خ�\��<���R'LpA�q�4�7��Z�i3=����q�?��O;d7�'S��&�f��[�|l�ֱ�+����J��{ߜ��KJ��2�d��x�췔/�!��e���$�Veկ\�K�'O�Q%�p�
K��c�N_�O햞���?����J�rFT<��vR�(�w 	J}�L�'�ߚ��|ʊ�(	K�ť1I�y%�mM��a��ԝ2���R������p�F%/L�l����~_�.�ﴝt6���F�;#9#��E~[��NRm�,��)�ءR��w4&kY�/p�7�RJ��8A�V:�r����ZUe#���U�j��
)O;�	-��e�S�v���?IF��z�w tܮ�x�i4��hA[���md������ߪ�b�T��SJy�V'����z�S�_f��NM�9�����>�ؐ������rw<����s�g|�N�<L�L�΢t6���F�-�[[�ғj;�4�"����a�3}&�V��B�6|}���_��V��Z���w��okJ|�:�v&
 ��y�=�I��=ڷr#�6 ���y�8��חBCg<4��~ޗ�	m,���ƥ��}f�[ٮ�;e�X�\��$�Tz�ƭ��W��o9�O���OO�a�xP8�h��N��3�v+6`�)a���G�3B�����0�vs��8��`sƃ�YB��Z�2^��n޽5���h��Gg<0��$K�2k�=��n��u�#�YF�̐�.��W��	l��J\�k��a
S�S��sF�slI»�W���?w2=���NK�΍��ź�����M����${��΃��]�9�r7Qi#��V��Vٙ-�؋n�?͝��y�1'�1v����+�BP>b�"�x�g�A�A���D��eBP�BP
AI���# (s���]��1GDP�I�;ݤ�%(?�Gc\��7�V�D��x s;n5rVr뭯�<`N�y`0O�eK���'�'��HY�ъ�d|��c���H�-_�Wh����;����n[�Q
#�n���H�|�T^�:Z��#i7oF�}��<�������}Ӣ�F��ڱ��~��&y��"�$�[h�v7Мэ[D�y��1#���=!���>����h\�ѵ�G�
B�玑��~=_4\8�*�4�j�|H�#+3���Y��eɍ��2�)&��R:�n7GW�y�ED�����Q��V�R���(غrl+�KS�LAALA
M7F�n���j���w'4]�4]�EF�7н������1�鄦������lנ"GF��I�?iF������ +h�L���N���L@�뽇���y�C�7}n�^0|�0�5L������~�K0�'5�ie�E;+�����$o|�7�
Շ�L�%lx������65����Җ+��&�Ɖ�ũpWű�`S{ v|f����9�K~!��u����-�����MmX}l��ſp'�� �B5�\�P��to� �&�I���I�������`�̒�l!���X�$��V����i�H|�e���j������zwT��K��5�Ǽ^��ܮ����p�
�v�)�C�2�,j�ʔ����.`R'�BWsi�]m+�Y�*%5�U��dۈ#V�=���?�A�OM̳�.v]%6�R�����9�:��G�q�bꁼ9�d�ӑ]Kћo������ڍdWZZ?�^����G6��]�J+j�I�x�,런 &�<-��a���Z2�E�K��J���Q��"�֮��u��2�`N�Nn�p�0Y�I�� �ܙm�Y��k�M�;|��g-ι�Y���4x�q�D-d�]��2�2n"Z�i��K���2���v�a���&H��2���7)�q_�q��`�ЊZ�|Ԕ���z�OGA<*������=S��/M˒��'��nU��5Te(�8�q� ��^-6��n�����x �8�q���){�B;R�|�FH��^+zjı�4	ϓ��C�	�,I�u^`$�qء6���zP:5�ذB`��%��S��|���A�aL����u
��9LH����К'������	�zjȇm0t��g����)��     