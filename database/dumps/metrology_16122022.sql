PGDMP              
            z            ots_test    14.5    14.5     c           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            d           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            e           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            f           1262    177911    ots_test    DATABASE     e   CREATE DATABASE ots_test WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE ots_test;
                postgres    false            �            1259    178005    metrologies    TABLE     g  CREATE TABLE public.metrologies (
    id integer NOT NULL,
    "sloeId" integer,
    "counterpartyId" integer,
    sgroei character varying(255),
    grsi character varying(255),
    min character varying(255),
    max character varying(255),
    range character varying(255),
    accuracy character varying(255),
    mpi character varying(255),
    "metrologyType" character varying(255),
    "documentType" character varying(255),
    "documentNumber" character varying(255),
    "fromDate" character varying(255),
    "toDate" character varying(255),
    document character varying(255),
    status character varying(255),
    arshin character varying(255),
    "verificationProcedure" character varying(255),
    "typeApprovalCertificate" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.metrologies;
       public         heap    postgres    false            �            1259    178010    metrologies_id_seq    SEQUENCE     �   CREATE SEQUENCE public.metrologies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.metrologies_id_seq;
       public          postgres    false    233            g           0    0    metrologies_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.metrologies_id_seq OWNED BY public.metrologies.id;
          public          postgres    false    234            �           2604    179252    metrologies id    DEFAULT     p   ALTER TABLE ONLY public.metrologies ALTER COLUMN id SET DEFAULT nextval('public.metrologies_id_seq'::regclass);
 =   ALTER TABLE public.metrologies ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    234    233            _          0    178005    metrologies 
   TABLE DATA           $  COPY public.metrologies (id, "sloeId", "counterpartyId", sgroei, grsi, min, max, range, accuracy, mpi, "metrologyType", "documentType", "documentNumber", "fromDate", "toDate", document, status, arshin, "verificationProcedure", "typeApprovalCertificate", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    233   �       h           0    0    metrologies_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.metrologies_id_seq', 282, true);
          public          postgres    false    234            �           2606    178167    metrologies metrologies_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.metrologies
    ADD CONSTRAINT metrologies_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.metrologies DROP CONSTRAINT metrologies_pkey;
       public            postgres    false    233            �           2606    178384 +   metrologies metrologies_counterpartyId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.metrologies
    ADD CONSTRAINT "metrologies_counterpartyId_fkey" FOREIGN KEY ("counterpartyId") REFERENCES public.counterparties(id) ON UPDATE CASCADE;
 W   ALTER TABLE ONLY public.metrologies DROP CONSTRAINT "metrologies_counterpartyId_fkey";
       public          postgres    false    233            �           2606    178389 #   metrologies metrologies_sloeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.metrologies
    ADD CONSTRAINT "metrologies_sloeId_fkey" FOREIGN KEY ("sloeId") REFERENCES public."summary-list-of-equipments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.metrologies DROP CONSTRAINT "metrologies_sloeId_fkey";
       public          postgres    false    233            _      x��]ݎ#�u��z
^&�Vo��0w��E �H�\$���G�JQ�DIK��6R�w�;��ZZy��Wȓ�뮮���J;��GpC~�����|u�N�����읪�D%]���}ڞW�R��_��߶��/�YU)���+��B�U!~�~���[H��n)T-d�3�� �P�p+�`�V/�����/ab�r�.�-e��w�0������VNyv)�f�Ë�C�ԕ׷vd�VA^�b�T���R�v�*�Q�ZO��b�V�e�F�*�a��R��)�w�#�������~�}���~	���
WU]�rER��I�6�kWqb2TQ��UH�ݰW��*�S(|g;�o?�|r���?����{��c{�~�>o/�׸�W����U�l�B���k_-p��گ.����ˏ�����	�����}���_.@�Y8���������g�VGԞ�k��������?�Wx��^����/��޳�y�_�#���b.@�q���/�|	�����o����kx�}�S>ǝ-.��}�Ͼƅ��_R�==�o��D.��������M��~�7��{��L=����2o������\D� K!��A��BȮ2	�%�W���E���1�z
Y/���w��q��;��~��w�~!�����Oڧ��]c&��x�q�9������o����@������|��t�'�]���O��?o�_?;�`\ջ(�g�b� ���?��=���m~���������]\ys�^C�Lmu�s��)Gw����U��r{�oɕ��>�]_K~�y)���_�;����G�C��y�0�y�Ef�t�sԮ��'�R���QQ��?�]��1x^2�y?,�?x����{�g�]m��������y/}{�(]�E������η~���Z��*�5�E�I���I�����.�(L4o�	x�t����)WZpa�]���l]�S=m-ػ�}�G�#C��:Ԃ1Ĵ���vn����Ru-p����������Ub2�뜿�����W��ͺ��a�v����������ě�#��|[w�w�ٟ�X �W�7�:����b�WF�ol�gW�5W_�m�s�HV�}����"?��uu�ډ��k�7:*�Xs���F��-�m��j��;ɍ�����|��|��֭Wƈ�<�����Z�x]�!��᛻�>ܚ>�@���� h�̶�k���������H�z%����n6k��Fy͍1�G�%��˰[��&@/���A|��0��~v�9<8U������5\l6+n�|eՖ;)��Ψ�\��qcb\�·N_G�h�cW���m��`�ҨZ���`��*kUW�z����Y��{�9O�u�0ah��^W��T�x����.�i�h4h
b���s�*�z���C:�M��`�T��26��'v36K�[��ɨ0��wך΍�Q���f#���M�Ag�ix4hL�@W��B��~���f�(k��;��1Q���qj����4t�����b�Bt%�����A�Nt'�<�o1����swٲ�Y=`߻�}�U�k��O�!f��87�'���|�V����N�I�*�Р�f���n��އi2��G@_x��vg""���!Z˷��4�嵜j��C ��HC̨�h1�Τ��@܁|۔z����ܖ��n�x�*
n��a�H�q�l�R��~���ʯ��F�Hɶ�oV<�wf-\l�z3%n)B���@�bFC�,�<�������q�K��J*���-�ևF�F��C���&ڕ�+�V��톯��|�7���"����k/�D7b1c j��YN�?��mu�+.�� ���8B�q��m��!��Q�&X�.|��ȍB�Q��6�F�w��B/E��U��ab� �8܍8Tph�������Bkby^Rzi����� S�b��2s�Q�bMʿ�B�����]�>;�T7���ET�#ʥQK-k|tb�W��y:�O�P��C������a�K�� �W��׳�������&ޠ��t����P��S��B�^:{�}���K���b���Ĕ����Kg/���a{�Z
����:�N�CLyx���t���X���ꥑ��k��S^�g/���>V�葉[6�AĻ1�f�?U/E���VH��N{i\�n=�AFubZ�K�}Qf/�W^�ȾE�M������N�i�OQ���v���~�f?���~V�����V�	?A,��Z3g�O93�D�2�	bҙʙXf9�����a� ܂=����EG���-M�7Ŝ7ż�*}�����M�aKK-�&��M��c�iW��2�y�}�>/�7Kek��}��X�����]��vo��m��(�p.C��9Y$����66U�M[�M��\\ �.�fi6;�E��ر&�!��p\� �+¦�.F�XP9+�	+�%|3C�[��/S�]������2{�)CL���Ζ�"+G�\����a7�fl��5Y��se\Rw6����jH�b��&�\�~km�&nm1�F+�}���U{1qgc��2Z1��y��[��9���b^�t�%�Z�1� �V��\�qb��1ĜB���︌GiηJ�tE�'c���X��R>�R~j��ĜA)���O���T�5����UGw��R�3S�Ĝ�ѽ�dq2�:��� ;z�,Y�S���C��^oѫ�~�b���!���Y��d�y������EOV�1�Q=P�[�[� �����p�E���<�L]��B �,A�C�u��'G�F�P]����V<1�ejc�4YLdP=�9w����1�#�yȶ�c�.ab4;̣��q.�._IdG2�3g�ﶌo��b4S��bQ��3�w��7��ks����p��Y��.eO�{3��Af���t)GC̔�耚9�s�m����b�~;��w��G����%b҆ʙ�e|���"�J�w�IC��a� [��90I3d�ED�n�m��[n<'�A��������͑�)�15[1C,"zus\s�e|Ӝh_��\�����ٹ�O��� }9A,"�u�\��.eO�S2Ģ����)w]�N�`�a*HK����e<Gק\ƆXK�!�x��O��'g�� #�x��O���$�8AL
�B>zO2��>y��&�Vb�'LNN�A`S`+�*&��&A`CgԗX��f�:E�Ī@W{I�%l�C�U�0I��k	��Pb�&���Pb�&��$�64���8����1C`���뺉Ec�I	-	e�$LN^A`���2Z<1�!C`���2Z�[�J�(������#���D"9 ����2*29�5.hH,�!����JBA�^�;X$�F��#�ɓ�n����z�"Q7�I�%�ўelЎXa2*�!�A;b	���4?C`�z��&Mf��%Tj	��I�י!�uCRe2�ґU2A`s`+�k���26�2�4�dll%ZO��b��-���(�I����4�� M��KVN���Z�c����V�����#llef PA���:"����k��5:"˴l�t�TD��kC��TD�i���ؠ"��_j���*"�����Q;��*r�R�drr=�t����ɤ!u$A`���3���Q;��:r�j�d��%v�%Jr�r��$�c�-A`���3���-7D[Zr���d��5�!�AK�_��Lҵ��Z-Qe��Q�0�D��?��u�n�aw�r�d�&��$ǯ6M-�[	����ɤ'���%�e|�G���poP��W��&5�!�AIto�Er�H�e|mr��k\PS��GjI���`sev�Ԗ��ͦ>��f�5&��4˕�7SShb2@�\�=U�36��+����wW5������rh��������rH���Y��.��L���l���h�m	T˗�mK�i�}7��Hf&�}7�Г
P�"�ʀД��n�P�"�J�$�aݹ��H�5Y#6�H�Le�3��*��#E2�0I��?BG�d*a��~26(I��a@dJ��   |;BI��a��m?�v���b�6(I��!LRن�JR${�s��0G(I��!L*� �1%�%E�z0IGw	��H^&'w�A`�����$}8Q��-)��u����ZR$����%	�$����-�Fؠ%E�{0I �AK�d�b-(���B�d����r��"�Jx7LR��bJ
���n�$�m@�%�U·a����!�)���XKI�w�[	o�I*�!���hKa����͂��o�$� ���x6�Iπ��W�H�2�'pdl�;��5j�!�AE�da���d�))�I��@���:R$���T��:"�x����꤂��\�$ٰ��E����$�"�elP�"��H��!�AG�dcm$�dlP�"�D�����r���$�$5k%C`���$�$u*R���P�"ٶX[:ֲC���$E�m��7glP�"�6�$�m(5)�k�Ej���%�e��RM36(I��^���n�m%)�ۃIڷ���JR$�����	��Hn&�bsC�AGt�v�Q��3Ĕ���#�鳀�ؠ#E2�0��� �AGt�Ԟ4��H�&�=i26(I��}"=J�!�AI������Gؠ$Ev��IEF�	�ĔQ�@e26(�)��ӧ@� �AKL�Ԃ�1e�%�ko�%Yn	������q*C`��9�&�8!q���¦�!�oA`��أ[�drr�u�Zr�y���d�=��-9���dr��Fؠ%ǟP؛��g� �AK��OқD���6h���I�I�I��I:h���I����#lВ���&'� �F�
P�8o[�剭kڟ���l�<JW��S�ڟԝ��~��������?Q��ggB�z�svv�B�h�~�~�e�^������a����uwZ{�NJG������3��k�⫸�ܬ�_4�㊬A5�7�n�~S�/��쭣��->nt����M�V��͚��n��D@�i��6�m^5�k�j���*�x#��Jk�t3:�/��ni�Rt���:��j����5�     